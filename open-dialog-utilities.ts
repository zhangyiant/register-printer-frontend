import { ipcRenderer } from 'electron';

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

export const openDialogUtilitiesApi = {
    openExportToExcelDialog: openExportToExcelDialog,
    openExportToJsonDialog: openExportToJsonDialog,
    openLoadFromJsonDialog: openLoadFromJsonDialog,
    openGenerateDialog: openGenerateDialog,
    openConfigFileDialog: openConfigFileDialog,
    openExcelPathDialog: openExcelPathDialog,
    openOutputPathDialog: openOutputPathDialog
}