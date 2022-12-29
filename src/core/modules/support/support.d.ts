import { Support } from '../../shared/get-support.js';
import Xui, { XuiPlugin } from '../../components/app/app-class.js';

export namespace Support {
  interface AppMethods {
    /** Object with properties about supported features */
    support: Support;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const SupportModule: XuiPlugin;

export default SupportModule;
