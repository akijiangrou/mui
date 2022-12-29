import { Device } from '../../shared/get-device.js';
import Xui, { XuiPlugin } from '../../components/app/app-class.js';

export namespace Device {
  interface AppMethods {
    /** Object with properties about device */
    device: Device;
  }
  interface AppParams {}
  interface AppEvents {}
}
declare const DeviceModule: XuiPlugin;

export default DeviceModule;
