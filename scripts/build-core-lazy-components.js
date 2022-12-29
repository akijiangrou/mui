/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
/* eslint global-require: "off" */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint arrow-body-style: "off" */
// const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const { default: babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const { minify } = require('terser');
const less = require('./utils/less.js');
const autoprefixer = require('./utils/autoprefixer.js');
const cleanCSS = require('./utils/clean-css.js');
const getConfig = require('./get-core-config.js');
const getOutput = require('./get-output.js');
const coreComponents = require('./core-components-list.js');
const fs = require('./utils/fs-extra.js');

const intro = `
function xuiComponentLoader(Xui, XuiAutoInstallComponent) {
  if (typeof XuiAutoInstallComponent === 'undefined') {
    XuiAutoInstallComponent = true;
  }
  var $ = Xui.$;
  var Utils = Xui.utils;
  var getDevice = Xui.getDevice;
  var getSupport = Xui.getSupport;
  var XuiClass = Xui.Class;
  var Modal = Xui.Modal;
  var ConstructorMethods = Xui.ConstructorMethods;
  var ModalMethods = Xui.ModalMethods;
  var $jsx = Xui.$jsx;
`;

const install = `
  if (XuiAutoInstallComponent) {
    if (Xui.prototype.modules && Xui.prototype.modules[COMPONENT.name]) {
      return;
    }
    Xui.use(COMPONENT);
    if (Xui.instance) {
      Xui.instance.useModuleParams(COMPONENT, Xui.instance.params);
      Xui.instance.useModule(COMPONENT);
    }
  }
  return COMPONENT;
`;

const outro = `
}
`;

async function buildLazyComponentsLess(components, rtl, cb) {
  const config = getConfig();
  const output = `${getOutput()}/core`;
  const colors = `{\n${Object.keys(config.colors)
    .map((colorName) => `  ${colorName}: ${config.colors[colorName]};`)
    .join('\n')}\n}`;
  const includeIosTheme = config.themes.indexOf('ios') >= 0;
  const includeMdTheme = config.themes.indexOf('md') >= 0;
  const includeAuroraTheme = config.themes.indexOf('aurora') >= 0;
  const includeDarkTheme = config.darkTheme;
  const includeLightTheme = config.lightTheme;

  const mainLess = fs
    .readFileSync(path.resolve(__dirname, '../src/core/xui.less'))
    .split('\n')
    .filter((line) => line.indexOf("@import './components") < 0)
    .join('\n')
    .replace(
      "@import (reference) './less/mixins.less';",
      "@import (reference) '../../less/mixins.less';",
    )
    .replace(
      "@import (reference) './less/vars.less';",
      "@import (reference) '../../less/vars.less';",
    )
    .replace('$includeIosTheme', includeIosTheme)
    .replace('$includeMdTheme', includeMdTheme)
    .replace('$includeAuroraTheme', includeAuroraTheme)
    .replace('$includeDarkTheme', includeDarkTheme)
    .replace('$includeLightTheme', includeLightTheme)
    .replace('$themeColor', config.themeColor)
    .replace('$colors', colors)
    .replace('$rtl', rtl);

  let cbs = 0;
  const componentsToProcess = components.filter((component) => {
    // eslint-disable-line
    return (
      fs.existsSync(
        path.resolve(__dirname, `../src/core/components/${component}/${component}.less`),
      ) && coreComponents.indexOf(component) < 0
    );
  });

  componentsToProcess.forEach(async (component) => {
    const lessContent = fs.readFileSync(
      path.resolve(__dirname, `../src/core/components/${component}/${component}.less`),
    );

    let cssContent;
    try {
      cssContent = await cleanCSS(
        await autoprefixer(
          await less(
            `${mainLess}\n${lessContent}`,
            path.resolve(__dirname, `../src/core/components/${component}/`),
          ),
        ),
      );
    } catch (err) {
      console.log(err);
    }
    fs.writeFileSync(
      `${output}/components/${component}/${component}${rtl ? '-rtl' : ''}.css`,
      cssContent,
    );

    cbs += 1;
    if (cbs === componentsToProcess.length && cb) cb();
  });
}

function buildLazyComponentsJs(components, cb) {
  const env = process.env.NODE_ENV || 'development';
  const format = 'umd';
  const output = `${getOutput()}/core`;

  const componentsToProcess = components.filter((component) => {
    // eslint-disable-line
    return fs.existsSync(`./src/core/components/${component}/${component}.js`);
  });

  const swiperContent = fs.readFileSync(
    path.resolve(__dirname, '../node_modules/swiper/swiper-bundle.js'),
  );

  rollup({
    treeshake: false,
    input: componentsToProcess.map(
      (component) => `./src/core/components/${component}/${component}.js`,
    ),
    plugins: [
      replace({
        delimiters: ['', ''],
        'process.env.NODE_ENV': JSON.stringify(env), // or 'production'
        'process.env.FORMAT': JSON.stringify(format),
        [`import Swiper from 'swiper/bundle';`]: swiperContent,
      }),
      nodeResolve({ mainFields: ['module', 'main', 'jsnext'] }),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
    ],
    onwarn(warning, warn) {
      const ignore = ['EVAL'];
      if (warning.code && ignore.indexOf(warning.code) >= 0) {
        return;
      }
      warn(warning);
    },
  })
    .then((bundle) => {
      // eslint-disable-line
      return bundle.write({
        strict: true,
        dir: `${output}/components/`,
        format: 'es',
        exports: 'default',
      });
    })
    .then(() => {
      const files = fs.readdirSync(`${output}/components/`);
      const filesToProcess = files.filter((fileName) => {
        // eslint-disable-line
        return (
          fileName.indexOf('.js') > 0 &&
          fileName.indexOf('chunk-') < 0 &&
          !fileName.match(/[0-9]/) &&
          coreComponents.indexOf(fileName.split('.js')[0]) < 0
        );
      });
      const filesToRemove = files.filter((fileName) => {
        // eslint-disable-line
        return (
          fileName.indexOf('.js') > 0 &&
          (fileName.indexOf('chunk-') === 0 ||
            fileName.match(/[0-9]/) ||
            coreComponents.indexOf(fileName.split('.js')[0]) >= 0)
        );
      });
      let babelHelpersContent = '';
      const babelHelpersFile = files.filter(
        (file) => file.includes('Babel') || file.includes('babel'),
      )[0];
      if (babelHelpersFile) {
        babelHelpersContent = fs
          .readFileSync(`${output}/components/${babelHelpersFile}`, 'utf-8')
          .split('\n')
          .filter((line) => line.indexOf('export {') < 0 && line.trim().length > 0)
          .map((line) => `  ${line}`)
          .join('\n');
      }

      let cbs = 0;
      filesToProcess.forEach(async (fileName) => {
        let fileIntro = intro;
        let fileContent = fs
          .readFileSync(`${output}/components/${fileName}`)
          .split('\n')
          .filter((line) => {
            if (
              (line.indexOf('import') >= 0 && line.indexOf('Babel') >= 0) ||
              line.indexOf('babel') >= 0
            ) {
              fileIntro += `\n${babelHelpersContent}\n`;
            }
            if (line.indexOf('import') >= 0 && line.indexOf('utils') >= 0) {
              const usedUtils = line.match(/ as ([a-zA-Z0-9]*)/g);
              if (usedUtils && usedUtils.length) {
                fileIntro += usedUtils
                  .map((v) => v.replace(' as ', ''))
                  .map((v) => `  var ${v} = Utils.${v};`)
                  .join('\n');
              }
            }
            return line.indexOf('import ') !== 0;
          })
          .map((line) => (line.trim().length ? `  ${line}` : line)) // eslint-disable-line
          .join('\n');
        fileContent = fileContent
          .replace(/var window = getWindow\(\);/g, '')
          .replace(/var document = getDocument\(\);/g, '')
          .replace(/getDocument\(\);/g, 'document')
          .replace(/getWindow\(\);/g, 'window')
          .replace(/(const|var|let) window = window/g, '')
          .replace(/(const|var|let) document = document/g, '');

        fileContent = `${fileIntro}\n  ${fileContent.trim()}${outro}`;
        if (fileName.indexOf('swiper') >= 0) {
          fileContent = fileContent
            .replace('var getDevice = Xui.getDevice;', '')
            .replace('var getSupport = Xui.getSupport;', '');
        }
        fileContent = fileContent
          .replace(/export default ([a-zA-Z_]*);/, (line, name) => {
            // eslint-disable-line
            return install.replace(/COMPONENT/g, name);
          })
          .replace(/export { ([a-zA-Z_]*) as default };/, (line, name) => {
            // eslint-disable-line
            return install.replace(/COMPONENT/g, name);
          });

        fileContent = (await minify(fileContent)).code;

        fileContent = `(${fileContent}(Xui, typeof XuiAutoInstallComponent === 'undefined' ? undefined : XuiAutoInstallComponent))`;

        fs.writeFileSync(
          `${output}/components/${fileName.split('.js')[0]}/${fileName.replace('.js', '.lazy.js')}`,
          `${fileContent}\n`,
        );

        cbs += 1;
        if (cbs === filesToProcess.length && cb) cb();
      });

      [...filesToRemove, ...filesToProcess].forEach((fileName) => {
        fs.unlinkSync(`${output}/components/${fileName}`);
      });
    })
    .catch((err) => {
      console.log(err.toString());
    });
}

function buildLazyComponents(cb) {
  let cbs = 0;
  const env = process.env.NODE_ENV || 'development';
  const targetCbs = env === 'development' ? 2 : 3;
  const config = getConfig();
  const components = fs.readdirSync('./src/core/components').filter((c) => c.indexOf('.') < 0);
  function callback() {
    cbs += 1;
    if (cbs === targetCbs && cb) cb();
  }
  buildLazyComponentsJs(components, callback);
  if (env === 'production') {
    buildLazyComponentsLess(components, false, callback);
    buildLazyComponentsLess(components, true, callback);
  } else {
    buildLazyComponentsLess(components, config.rtl, callback);
  }
}

module.exports = buildLazyComponents;
