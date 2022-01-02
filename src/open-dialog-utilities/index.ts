const { ipcRenderer } = require('electron');

export  function openExportToExcelDialog(callback: (result: any) => void) {
    ipcRenderer.send("open-export-excel-dialog");
    ipcRenderer.once('open-export-excel-dialog-reply', (event, result) => {
        callback(result);
    });
    return;
}
