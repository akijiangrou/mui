/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
/* eslint global-require: "off" */
/* eslint no-param-reassign: ["error", { "props": false }] */

const path = require('path');
const glob = require('glob');
const getOutput = require('./get-output.js');
const fs = require('./utils/fs-extra.js');

function capitalize(name) {
  return name
    .split('-')
    .map((word) => {
      // eslint-disable-line
      return word
        .split('')
        .map((char, index) => {
          if (index === 0) return char.toUpperCase();
          return char;
        })
        .join('');
    })
    .join('');
}

function copyTypings() {
  const output = `${getOutput()}/core`;
  ['modules', 'components', 'shared'].forEach((folderName) => {
    glob('**/*.*', { cwd: path.resolve(__dirname, `../src/core/${folderName}`) }, (err, files) => {
      const filesToProcess = files.filter((file) => {
        return file.indexOf('.d.ts') >= 0;
      });
      filesToProcess.forEach((file) => {
        const fileContent = fs.readFileSync(
          path.resolve(__dirname, `../src/core/${folderName}`, file),
        );
        fs.writeFileSync(path.resolve(`${output}/${folderName}`, file), fileContent);
      });
    });
  });
}

function generateTypings(content, modules, components) {
  const cbxBase = `import Xui from './components/app/app-class.js'`;

  const helpers = ['request', 'utils', 'support', 'device'];

  const importHelpers = helpers.map((helper) => {
    const capitalized = capitalize(helper);
    return `import ${capitalized} from './shared/${helper}';`;
  });

  const exportHelpers = helpers.map(capitalize).join(', ');

  const importModules = modules.map((cbxModule) => {
    const capitalized = capitalize(cbxModule);
    return `import { ${capitalized} as ${capitalized}Module } from './modules/${cbxModule}/${cbxModule}.js';`;
  });

  const importComponents = components.map((component) => {
    const capitalized = capitalize(component);
    return `import { ${capitalized} } from './components/${component}/${component}.js';`;
  });

  const installModules = modules
    .map((cbxModule) => {
      const capitalized = capitalize(cbxModule);
      return [
        `interface XuiClass<Events> extends ${capitalized}Module.AppMethods{}`,
        `interface XuiParameters extends ${capitalized}Module.AppParams{}`,
        `interface XuiEvents extends ${capitalized}Module.AppEvents{}`,
      ].join('\n  ');
    })
    .join('\n  ');

  const installComponents = components
    .map((cbxModule) => {
      const capitalized = capitalize(cbxModule);
      return [
        `interface XuiClass<Events> extends ${capitalized}.AppMethods{}`,
        `interface XuiParameters extends ${capitalized}.AppParams{}`,
        `interface XuiEvents extends ${capitalized}.AppEvents{}`,
      ].join('\n  ');
    })
    .join('\n  ');

  const install = [installModules, `  ${installComponents}`].join('\n');

  const exportComponents = components
    .map((cbxModule) => {
      return capitalize(cbxModule);
    })
    .join(', ');

  return content
    .replace(/\/\/ IMPORT_BASE/, cbxBase)
    .replace(/\/\/ IMPORT_HELPERS/, importHelpers.join('\n'))
    .replace(/\/\/ EXPORT_HELPERS/, `export { ${exportHelpers} };`)
    .replace(/\/\/ IMPORT_MODULES/, importModules.join('\n'))
    .replace(/\/\/ IMPORT_COMPONENTS/, importComponents.join('\n'))
    .replace(/\/\/ INSTALL/, install)
    .replace(/\/\/ EXPORT_COMPONENTS/, `export { ${exportComponents} }`);
}

function buildTypings(cb) {
  copyTypings();

  const output = `${getOutput()}/core`;

  const modules = fs.readdirSync('./src/core/modules').filter((file) => {
    if (file[0] === '.') return false;
    return fs.existsSync(`./src/core/modules/${file}/${file}.d.ts`);
  });
  const components = fs.readdirSync('./src/core/components').filter((file) => {
    if (file[0] === '.') return false;
    return fs.existsSync(`./src/core/components/${file}/${file}.d.ts`);
  });

  const mainContent = fs.readFileSync(path.resolve(__dirname, '../src/core/xui.d.ts'));
  const typesContent = fs.readFileSync(path.resolve(__dirname, '../src/core/xui-types.d.ts'));

  const mainTypings = generateTypings(mainContent, modules, components);
  const typesTypings = generateTypings(typesContent, modules, components).replace(
    /\.\/types\//g,
    './',
  );

  fs.writeFileSync(`${output}/xui.d.ts`, mainTypings);
  fs.writeFileSync(`${output}/xui-types.d.ts`, typesTypings);

  cb();
}

module.exports = buildTypings;
