import { getWindow, getDocument } from 'ssr-window';
import { id } from '../../shared/utils.js';
import $ from '../../shared/dom7.js';

const fetchedModules = [];
function loadModule(moduleToLoad) {
  const Xui = this;
  const window = getWindow();
  const document = getDocument();
  return new Promise((resolve, reject) => {
    const app = Xui.instance;
    let modulePath;
    let moduleObj;
    let moduleFunc;
    if (!moduleToLoad) {
      reject(new Error('Xui: Lazy module must be specified'));
      return;
    }

    function install(module) {
      Xui.use(module);

      if (app) {
        app.useModuleParams(module, app.params);
        app.useModule(module);
      }
    }

    if (typeof moduleToLoad === 'string') {
      const matchNamePattern = moduleToLoad.match(/([a-z0-9-]*)/i);
      if (
        moduleToLoad.indexOf('.') < 0 &&
        matchNamePattern &&
        matchNamePattern[0].length === moduleToLoad.length
      ) {
        if (!app || (app && !app.params.lazyModulesPath)) {
          reject(
            new Error(
              'Xui: "lazyModulesPath" app parameter must be specified to fetch module by name',
            ),
          );
          return;
        }
        modulePath = `${app.params.lazyModulesPath}/${moduleToLoad}/${moduleToLoad}.lazy.js`;
      } else {
        modulePath = moduleToLoad;
      }
    } else if (typeof moduleToLoad === 'function') {
      moduleFunc = moduleToLoad;
    } else {
      // considering cbx-Plugin object
      moduleObj = moduleToLoad;
    }

    if (moduleFunc) {
      const module = moduleFunc(Xui, false);
      if (!module) {
        reject(new Error("Xui: Can't find Xui component in specified component function"));
        return;
      }
      // Check if it was added
      if (Xui.prototype.modules && Xui.prototype.modules[module.name]) {
        resolve();
        return;
      }
      // Install It
      install(module);

      resolve();
    }
    if (moduleObj) {
      const module = moduleObj;
      if (!module) {
        reject(new Error("Xui: Can't find Xui component in specified component"));
        return;
      }
      // Check if it was added
      if (Xui.prototype.modules && Xui.prototype.modules[module.name]) {
        resolve();
        return;
      }
      // Install It
      install(module);

      resolve();
    }
    if (modulePath) {
      if (fetchedModules.indexOf(modulePath) >= 0) {
        resolve();
        return;
      }
      fetchedModules.push(modulePath);
      const scriptLoad = new Promise((resolveScript, rejectScript) => {
        Xui.request.get(
          modulePath,
          (scriptContent) => {
            const callbackId = id();
            const callbackLoadName = `cbx_component_loader_callback_${callbackId}`;

            const scriptEl = document.createElement('script');
            scriptEl.innerHTML = `window.${callbackLoadName} = function (Xui, XuiAutoInstallComponent) {return ${scriptContent.trim()}}`;
            $('head').append(scriptEl);

            const componentLoader = window[callbackLoadName];
            delete window[callbackLoadName];
            $(scriptEl).remove();

            const module = componentLoader(Xui, false);

            if (!module) {
              rejectScript(new Error(`Xui: Can't find Xui component in ${modulePath} file`));
              return;
            }

            // Check if it was added
            if (Xui.prototype.modules && Xui.prototype.modules[module.name]) {
              resolveScript();
              return;
            }

            // Install It
            install(module);

            resolveScript();
          },
          (xhr, status) => {
            rejectScript(xhr, status);
          },
        );
      });
      const styleLoad = new Promise((resolveStyle) => {
        Xui.request.get(
          modulePath
            .replace('.lazy.js', app.rtl ? '.rtl.css' : '.css')
            .replace('.js', app.rtl ? '.rtl.css' : '.css'),
          (styleContent) => {
            const styleEl = document.createElement('style');
            styleEl.innerHTML = styleContent;
            $('head').append(styleEl);

            resolveStyle();
          },
          () => {
            resolveStyle();
          },
        );
      });

      Promise.all([scriptLoad, styleLoad])
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

export default loadModule;
