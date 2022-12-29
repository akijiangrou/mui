/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
/* eslint global-require: "off" */
/* eslint no-param-reassign: ["off"] */

const exec = require('exec-sh');
const bannerVue = require('./banners/vue.js');
const getOutput = require('./get-output.js');
const fs = require('./utils/fs-extra.js');
const transformVueComponent = require('./transform-vue-component.js');

// Build Vue
async function buildVue(cb) {
  const buildPath = getOutput();

  const files = fs.readdirSync('src/vue/components').filter((file) => file.indexOf('.vue') > 0);
  const componentImports = [];
  const componentExports = [];

  const componentsRegistrations = [];

  files.forEach((fileName) => {
    const componentName = fileName
      .replace('.vue', '')
      .split('-')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join('');
    const fileBase = fileName.replace('.vue', '');
    componentImports.push(`import cbx${componentName} from './components/${fileBase}.js';`);
    componentExports.push(`cbx${componentName}`);
    componentsRegistrations.push(`app.component('cbx-${fileBase}', cbx${componentName})`);
    transformVueComponent(
      `src/vue/components/${fileName}`,
      `src/vue-temp/${fileName.replace('.vue', '.js')}`,
    );
  });

  const pluginContent = fs
    .readFileSync('src/vue/xui-vue.js', 'utf-8')
    .replace('// IMPORT_COMPONENTS', componentImports.join('\n'))
    .replace('// EXPORT_COMPONENTS', `export { ${componentExports.join(', ')} }`);

  fs.writeFileSync(`${buildPath}/vue/xui-vue.js`, pluginContent);

  await exec.promise(
    `MODULES=esm npx babel --config-file ./babel-vue.config.js src/vue --out-dir ${buildPath}/vue --ignore "src/vue/xui-vue.js","*.ts","*.jsx",*jsx --extensions .js`,
  );

  await exec.promise(
    `MODULES=esm npx babel --config-file ./babel-vue.config.js src/vue-temp --out-dir ${buildPath}/vue/components --ignore "src/vue/xui-vue.js","*.ts","*.jsx",*jsx`,
  );

  const esmContent = fs.readFileSync(`${buildPath}/vue/xui-vue.js`, 'utf-8');

  fs.writeFileSync(`${buildPath}/vue/xui-vue.js`, `${bannerVue.trim()}\n${esmContent}`);

  // Bundle
  const bundleContent = `
function registerComponents(app) {
  ${componentsRegistrations.join(';\n  ')}
}
export { registerComponents }
      `.trim();
  fs.writeFileSync(
    `${buildPath}/vue/xui-vue-bundle.js`,
    `${bannerVue.trim()}\n${esmContent}\n${bundleContent}`,
  );

  if (cb) cb();
}

module.exports = buildVue;
