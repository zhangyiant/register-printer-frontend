const { app, Menu, dialog, ipcMain, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
const remoteMain = require("@electron/remote/main");
const { getRegisterPrinterVersion } = require('./get-register-printer-version');


function createWindow() {
  let win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  ipcMain.on("get-app-path", (event) => {
    event.returnValue = app.getAppPath();
  });

  ipcMain.on("get-version", (event) => {
    event.returnValue = app.getVersion();
  });

  ipcMain.on("open-export-to-excel-dialog", (event) => {
    dialog.showOpenDialog(
      win,
      {
        properties: [
          'openDirectory'
        ]
      }
    ).then(
      (result) => {
        event.reply("open-export-to-excel-dialog-reply", result);
      }
    );
  });

  ipcMain.on("open-export-to-json-dialog", (event) => {
    dialog.showSaveDialog(
      win,
      {
        title: 'Export to JSON file',
        filters: [
          {
            name: 'JSON file',
            extensions: ['json']
          }
        ]
      }
    ).then(
      (result) => {
        event.reply("open-export-to-json-dialog-reply", result);
      }
    );
  });

  ipcMain.on("open-load-from-json-dialog", (event) => {
    dialog.showOpenDialog(
      win,
      {
        properties: [
          'openFile'
        ],
        filters: [
          {
            name: 'JSON file',
            extensions: ['json']
          }
        ]
      }
    ).then(
      (result) => {
        event.reply("open-load-from-json-dialog-reply", result);
      }
    );
  });

  ipcMain.on("open-generate-dialog", (event) => {
    dialog.showOpenDialog(
      win,
      {
        properties: [
          'openDirectory'
        ]
      }
    ).then(
      (result) => {
        event.reply("open-generate-dialog-reply", result);
      }
    );
  });
  // win.webContents.openDevTools();

  remoteMain.enable(win.webContents);

  win.loadFile('dist/register-printer-frontend/index.html');
}

const template = [
  {
    label: "About",
    submenu: [
      {
        label: "About RegisterPrinter",
        click: () => {
          dialog.showMessageBox(
            {
              type: "info",
              title: "About RegisterPrinter",
              message: "Version: " + app.getVersion() + "\n" +
                "RegisterPrinter Version: " + getRegisterPrinterVersion() + "\n" +
                "Electronjs Version: " + process.versions.electron
            }
          );
        }
      }
    ]
  }
];

remoteMain.initialize();

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
autoUpdater.checkForUpdatesAndNotify();
