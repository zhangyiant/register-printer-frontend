import { app } from '@electron/remote';
import * as process from 'process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as child_process from 'child_process';

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

export function getVersion(): string {
    return app.getVersion();
}

export function exportExcels(jsonString: string, outputFolder: string, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
  const filename = path.join(os.tmpdir(), 'register-printer.json');
  fs.writeFile(filename, jsonString, err => {
    if (err) {
      console.log(err);
    }
    const registerPrinterApp = getRegisterPrinterPath();
    const args: string[] = [];
    args.push('--input-json');
    args.push(filename);
    args.push('-o');
    args.push(outputFolder);
    args.push('--gen-excel');
    const appProcess = child_process.spawn(
      registerPrinterApp, args
    );
    appProcess.stdout.on('data', dataCallback);
    appProcess.stderr.on('data', dataCallback);
    appProcess.on('exit', exitCallback);
  });
}
