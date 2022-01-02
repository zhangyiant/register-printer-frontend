const { ipcRenderer } = require('electron');

export function openExportToExcelDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-export-to-excel-dialog");
    ipcRenderer.once('open-export-to-excel-dialog-reply', (event, result) => {
        callback(result);
    });
    return;
}

export function openExportToJsonDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-export-to-json-dialog");
    ipcRenderer.once("open-export-to-json-dialog-reply", (event, result) => {
        callback(result);
    });
}

export function openLoadFromJsonDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-load-from-json-dialog");
    ipcRenderer.once("open-load-from-json-dialog-reply", (event, result) => {
        callback(result);
    });
}
