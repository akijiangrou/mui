import Xui, { XuiPlugin } from 'xui/types';
import { Store } from 'xui/types';

// IMPORT_COMPONENTS

export interface XuiTheme {
  ios: boolean;
  md: boolean;
  aurora: boolean;
}

/** Object with boolean properties with information about currently used theme (iOS, MD or Aurora) */
declare const theme: XuiTheme;

/** Main Xui's initialized instance. It allows you to use any of Xui APIs */
declare const cbx: Xui;

/** Callback function that will be executed when Xui fully intialized. Useful to use in components when you need to access Xui API and to be sure it is ready. So it is safe to put all Xui related logic into this callback. As an argument it receives initialized Xui instance */
declare const cbxready: (callback: (cbx: Xui) => void) => void;

declare const XuiVue: XuiPlugin;

interface useStore {
  (store: Store, getter: string): any;
  (getter: string): any;
}

declare const useStore: useStore;

// EXPORT_COMPONENTS
export { cbx, cbxready, theme, useStore };
export default XuiVue;
