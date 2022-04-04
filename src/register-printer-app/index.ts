const api: any = (window as any).registerPrinterAppApi;

export function getRegisterPrinterPath() {
  api.getRegisterPrinterPath();
  return;
}

export function getVersion(): string {
  return api.getVersion();
}

export function exportExcels(
  jsonString: string,
  outputFolder: string,
  dataCallback: (data: any) => void,
  exitCallback: (data: any) => void) {
  api.exportExcels(jsonString, outputFolder, dataCallback, exitCallback);
}

export function generate(generateConfig: any, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
  api.generate(generateConfig, dataCallback, exitCallback);
}

export function exportJson(jsonString: string, outputFilename: string, exitCallback: (filename: string) => void) {
  api.exportJson(jsonString, outputFilename, exitCallback);
}

export function loadJson(jsonFilename: string, dataCallback: (data: any) => void, exitCallback: (data: any) => void) {
  api.loadJson(jsonFilename, dataCallback, exitCallback);
}

export function generateAll(jsonString: string, outputPath: string, dataCallback: (data: any) => void) {
  api.generateAll(jsonString, outputPath, dataCallback);
}
