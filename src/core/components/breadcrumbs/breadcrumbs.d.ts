import Xui from '../app/app-class.js';
import { CSSSelector, XuiPlugin } from '../app/app-class.js';

export namespace Breadcrumbs {
  interface AppMethods {
    breadcrumbs: {};
  }
  interface AppParams {}
  interface DomEvents {}
  interface AppEvents {}
}

declare const BreadcrumbsComponent: XuiPlugin;

export default BreadcrumbsComponent;
