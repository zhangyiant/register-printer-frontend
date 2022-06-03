export interface RegisterPrinterConfig {
  saveExportSettingsWhenExit?: boolean;
}

export interface RegisterPrinterConfigMgr {
  loadConfig(): RegisterPrinterConfig;
  saveConfig(config: RegisterPrinterConfig): boolean;
}
