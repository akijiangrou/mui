/* eslint-disable import/no-mutable-exports */
import Xui from 'xui/lite';
import { extend, unsetRouterIds } from './utils.js';

let cbx;
let cbxevents;

const theme = {};

const cbxrouters = {
  views: [],
  tabs: [],
  modals: null,
};

const setTheme = () => {
  if (!cbx) return;
  theme.ios = cbx.theme === 'ios';
  theme.md = cbx.theme === 'md';
  theme.aurora = cbx.theme === 'aurora';
};

const cleanup = () => {
  unsetRouterIds();
  delete theme.ios;
  delete theme.md;
  delete theme.aurora;
  cbxrouters.views = [];
  cbxrouters.tabs = [];
  cbxrouters.modals = null;
};

const cbxinitEvents = () => {
  cbxevents = new Xui.Events();
};

const cbxinit = (rootEl, params = {}, init = true) => {
  const cbxParams = extend({}, params, {
    el: rootEl,
    init,
  });
  if (typeof params.store !== 'undefined') cbxParams.store = params.store;
  if (!cbxParams.routes) cbxParams.routes = [];

  if (cbxParams.userAgent && (cbxParams.theme === 'auto' || !cbxParams.theme)) {
    const device = Xui.getDevice({ userAgent: cbxParams.userAgent }, true);
    theme.ios = !!device.ios;
    theme.aurora = device.desktop && device.electron;
    theme.md = !theme.ios && !theme.aurora;
  }
  // eslint-disable-next-line
  if (cbx && typeof window !== 'undefined') return;
  // eslint-disable-next-line
  if (typeof window === 'undefined') cleanup();

  const instance = new Xui(cbxParams);
  cbx = instance;
  setTheme();

  if (instance.initialized) {
    cbx = instance;
    cbxevents.emit('ready', cbx);
  } else {
    instance.on('init', () => {
      cbx = instance;
      cbxevents.emit('ready', cbx);
    });
  }
};

const cbxready = (callback) => {
  if (!callback) return;
  if (cbx && cbx.initialized) callback(cbx);
  else {
    cbxevents.once('ready', callback);
  }
};

export { cbx, theme, cbxready, cbxevents, cbxinit, cbxrouters, cbxinitEvents, setTheme };
