const { app } = require('electron');
const path = require('path');
const child_process = require('child_process');


function getRegisterPrinterPath() {

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

export function getRegisterPrinterVersion() {
  const appPath = getRegisterPrinterPath();
  const args = [];
  args.push('-v');
  const appProcess = child_process.spawnSync(
    appPath, args,
    {
      'encoding': 'utf8'
    }
  );
  const result = appProcess.stdout;
  return result.trim();
}
