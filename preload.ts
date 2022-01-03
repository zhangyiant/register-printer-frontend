import { contextBridge } from "electron";
import { ipcRenderer } from 'electron';
import * as process from 'process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as child_process from 'child_process';

function getRegisterPrinterPath() {
    const appPath = ipcRenderer.sendSync("get-app-path");

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

function getVersion(): string {
  return ipcRenderer.sendSync("get-version");
}

function exportExcels(jsonString: string, outputFolder: string, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
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

function generate(generateConfig: any, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
  const registerPrinterApp = getRegisterPrinterPath();
  const args: string[] = [];
  args.push('-f');
  args.push(generateConfig.configFile);
  args.push('-p');
  args.push(generateConfig.excelPath);
  args.push('-o');
  args.push(generateConfig.outputPath);
  if (generateConfig.genDoc) {
    args.push('--gen-doc');
  }
  if (generateConfig.genC) {
    args.push('--gen-c-header');
  }
  if (generateConfig.genUvm) {
    args.push('--gen-uvm');
  }
  if (generateConfig.genRtl) {
    args.push('--gen-rtl');
  }
  args.push('--gen-json');
  const appProcess = child_process.spawn(
    registerPrinterApp, args
  );
  appProcess.stdout.on('data', dataCallback);
  appProcess.stderr.on('data', dataCallback);
  appProcess.on('exit', (code) => {
    const filename: string = path.join(
      generateConfig.outputPath,
      'register_printer.json'
    );
    fs.readFile(filename, (err, data) => {
      // Check for errors
      if (err) {
        throw err;
      }
      exitCallback(data);
    });
  });
}

function exportJson(jsonString: string, outputFilename: string, exitCallback: (filename: string) => void) {
  fs.writeFile(outputFilename, jsonString, err => {
    if (err) {
      console.log(err);
    } else {
      exitCallback(outputFilename);
    }
  });
}

function loadJson(jsonFilename: string, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
  const registerPrinterApp = getRegisterPrinterPath();
  const args: string[] = [];
  args.push('--input-json');
  args.push(jsonFilename);
  args.push('-o');
  args.push(os.tmpdir());
  args.push('--gen-json');
  const appProcess = child_process.spawn(
    registerPrinterApp, args
  );
  appProcess.stdout.on('data', (data) => {
      const str = data.toString("utf8");
      dataCallback(str);
  });
  appProcess.stderr.on('data', (data) => {
      const str = data.toString("utf8");
      dataCallback(str);
  });
  appProcess.on('exit', (code) => {
    const filename: string = path.join(
      os.tmpdir(),
      'register_printer.json'
    );
    fs.readFile(filename, { encoding: "utf8" }, (err, data) => {
      // Check for errors
      if (err) {
        throw err;
      }
      exitCallback(data);
    });
  });
}

function generateAll(jsonString: string, outputPath: string, dataCallback: (data: any) => void) {
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
    args.push(outputPath);
    args.push('--gen-doc');
    args.push('--gen-c-header');
    args.push('--gen-uvm');
    args.push('--gen-rtl');
    args.push('--gen-json');
    const appProcess = child_process.spawn(
      registerPrinterApp, args
    );
    appProcess.stdout.on('data', dataCallback);
    appProcess.stderr.on('data', dataCallback);
  });
}

const registerPrinterAppApi = {
    getRegisterPrinterPath: getRegisterPrinterPath,
    getVersion: getVersion,
    exportExcels: exportExcels,
    generate: generate,
    exportJson: exportJson,
    loadJson: loadJson,
    generateAll: generateAll
}

contextBridge.exposeInMainWorld(
    "registerPrinterAppApi",
    registerPrinterAppApi
);

function openExportToExcelDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-export-to-excel-dialog");
    ipcRenderer.once('open-export-to-excel-dialog-reply', (event, result) => {
        callback(result);
    });
    return;
}

function openExportToJsonDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-export-to-json-dialog");
    ipcRenderer.once("open-export-to-json-dialog-reply", (event, result) => {
        callback(result);
    });
}

function openLoadFromJsonDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-load-from-json-dialog");
    ipcRenderer.once("open-load-from-json-dialog-reply", (event, result) => {
        callback(result);
    });
}

function openGenerateDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-generate-dialog");
    ipcRenderer.once("open-generate-dialog-reply", (event, result) => {
        callback(result);
    })
}

function openConfigFileDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-config-file-dialog");
    ipcRenderer.once("open-config-file-dialog-reply", (event, result) => {
        callback(result);
    });
    return;
}

function openExcelPathDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-excel-path-dialog");
    ipcRenderer.once("open-excel-path-dialog-reply", (event, result) => {
        callback(result);
    });
    return;
}

function openOutputPathDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-output-path-dialog");
    ipcRenderer.once("open-output-path-dialog-reply", (event, result) => {
        callback(result);
    });
    return;
}

const openDialogUtilitiesApi = {
    openExportToExcelDialog: openExportToExcelDialog,
    openExportToJsonDialog: openExportToJsonDialog,
    openLoadFromJsonDialog: openLoadFromJsonDialog,
    openGenerateDialog: openGenerateDialog,
    openConfigFileDialog: openConfigFileDialog,
    openExcelPathDialog: openExcelPathDialog,
    openOutputPathDialog: openOutputPathDialog
}

contextBridge.exposeInMainWorld(
    "openDialogUtilitiesApi",
    openDialogUtilitiesApi
);
