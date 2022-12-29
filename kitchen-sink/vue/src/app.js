/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import Xui from 'xui/lite/bundle';
import XuiVue from 'xui-vue';
import App from './app.vue';

import 'xui/css/bundle';
import './css/app.css';

// Demo
/* eslint-disable */
if (window.parent && window.parent !== window) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty('--cbx-safe-area-top', '44px');
    html.style.setProperty('--cbx-safe-area-bottom', '34px');
  }
}
/* eslint-enable */

Xui.use(XuiVue);

// Init Vue App
const app = createApp(App);

app.mount('#app');
