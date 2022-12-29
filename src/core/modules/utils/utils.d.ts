import { Utils } from '../../shared/utils.js';
import Xui, { XuiPlugin } from '../../components/app/app-class.js';

export namespace Utils {
  interface AppMethods {
    /** Object with set of helper methods */
    utils: Utils;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const UtilsModule: XuiPlugin;

export default UtilsModule;
