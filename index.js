const { app, dialog, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.webContents.openDevTools();

  win.loadFile('dist/register-printer-frontend/index.html');
}

app.whenReady().then(createWindow);

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
autoUpdater.checkForUpdatesAndNotify();
