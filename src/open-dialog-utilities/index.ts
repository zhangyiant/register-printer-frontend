const api = (window as any).openDialogUtilitiesApi;

export function openExportToExcelDialog(callback: (result: any) => void) {
    api.openExportToExcelDialog(callback);
    return;
}

export function openExportToJsonDialog(callback: (result: any) => void) {
    api.openExportToJsonDialog(callback);
}

export function openLoadFromJsonDialog(callback: (result: any) => void) {
    api.openLoadFromJsonDialog(callback);
}

export function openGenerateDialog(callback: (result: any) => void) {
    api.openGenerateDialog(callback);
}

export function openConfigFileDialog(callback: (result: any) => void) {
    api.openConfigFileDialog(callback);
    return;
}

export function openExcelPathDialog(callback: (result: any) => void) {
    api.openExcelPathDialog(callback);
    return;
}

export function openOutputPathDialog(callback: (result: any) => void) {
    api.openOutputPathDialog(callback);
    return;
}
