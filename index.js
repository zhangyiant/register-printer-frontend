const { app, Menu, dialog, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
const remoteMain = require("@electron/remote/main");
const { getRegisterPrinterVersion } = require('./get-register-printer-version');


function createWindow() {
  let win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
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
