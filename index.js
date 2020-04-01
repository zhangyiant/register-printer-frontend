const { app, Menu, dialog, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.webContents.openDevTools();

  win.loadFile('dist/register-printer-frontend/index.html');
}

const template = [
  {
    label: "RegisterPrinter",
    submenu: [
      {
        label: "About RegisterPrinter",
        click: () => {
          dialog.showMessageBox(
            {
              type: "info",
              title: "About RegisterPrinter",
              message: "Version: " + app.getVersion()
            }
          );
        }
      }
    ]
  }
];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
autoUpdater.checkForUpdatesAndNotify();