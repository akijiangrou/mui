import { Request } from '../../shared/request.js';
import Xui, { XuiPlugin } from '../../components/app/app-class.js';

export namespace Request {
  interface AppMethods {
    /** Object with properties about supported features */
    request: Request;
  }
  interface AppParams {}
  interface AppEvents {}
}

declare const RequestModule: XuiPlugin;

export default RequestModule;
