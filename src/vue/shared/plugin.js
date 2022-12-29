import Xui from 'xui/lite';
import componentsRouter from './components-router.js';
import { cbx, cbxready, theme, cbxinitEvents, setTheme } from './cbx.js';

const XuiVue = {
  name: 'vuePlugin',
  installed: false,
  install(params = {}) {
    if (XuiVue.installed) return;
    XuiVue.installed = true;

    cbxinitEvents();

    const { theme: paramsTheme, userAgent } = params;

    if (paramsTheme === 'md') theme.md = true;
    if (paramsTheme === 'ios') theme.ios = true;
    if (paramsTheme === 'aurora') theme.aurora = true;

    // eslint-disable-next-line
    const needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;
    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      const device = Xui.getDevice({ userAgent }, true);
      theme.ios = !!device.ios;
      theme.aurora = device.desktop && device.electron;
      theme.md = !theme.ios && !theme.aurora;
    }
    cbxready(() => {
      setTheme();
    });

    Xui.Router.use(componentsRouter);
  },
};

export { cbxready, cbx, theme };
export default XuiVue;
