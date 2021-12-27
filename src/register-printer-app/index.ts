import { app } from '@electron/remote';
import * as process from 'process';
import * as path from 'path';

export function getRegisterPrinterPath() {
    const appPath = app.getAppPath();

    let appName;

    if (process.platform === 'darwin') {
      appName = 'RegisterPrinter';
    } else if (process.platform === 'win32') {
      appName = 'RegisterPrinter.exe';
    } else {
      throw new Error('Unsupported OS');
    }
    const folderName = path.basename(appPath);
    let registerPrinterApp = null;
    if (folderName.endsWith('.asar')) {
      const unpackedAppPath = path.join(
        path.dirname(appPath),
        'app.asar.unpacked'
      );

      registerPrinterApp = path.join(
        unpackedAppPath,
        'app',
        appName);
    } else {
      registerPrinterApp = path.join(
        appPath,
        'app',
        appName);
    }

    return registerPrinterApp;
}
