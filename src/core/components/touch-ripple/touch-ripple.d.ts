import { Dom7Array } from 'dom7';
import Xui, { CSSSelector, XuiEventsClass, XuiPlugin } from '../app/app-class.js';

export namespace TouchRipple {
  interface TouchRipple {
    $rippleWaveEl: Dom7Array;
    rippleTransform: string;
    removing: boolean;
    remove(): void;
  }
  interface AppMethods {
    touchRipple: {
      create($el: Dom7Array, x: number, y: number): TouchRipple;
    };
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const TouchRippleComponent: XuiPlugin;
export default TouchRippleComponent;
