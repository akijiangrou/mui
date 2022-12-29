import Xui, { CSSSelector, XuiEventsClass, XuiPlugin } from '../app/app-class.js';
import { Swiper } from 'swiper/bundle';

export namespace Swiper {
  interface Parameters {}
  interface AppMethods {
    swiper: {
      /** initialize slider with options */
      create(swiperEl: HTMLElement | CSSSelector, params?: Parameters): Swiper;
      /** get Swiper instance by HTML element */
      get(swiperEl: HTMLElement | CSSSelector): Swiper;
      /** destroy Swiper instance */
      get(swiperEl: HTMLElement | CSSSelector): void;
    };
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const SwiperComponent: XuiPlugin;
export default SwiperComponent;
