import {RegisterPrinterConfig, RegisterPrinterConfigMgr} from 'register-printer-config';

function loadConfig(): RegisterPrinterConfig {
  return {
    saveExportSettingsWhenExit: true
  };
}

function saveConfig(config: RegisterPrinterConfig): boolean {
  return true;
}

export const registerPrinterConfigApi: RegisterPrinterConfigMgr = {
  loadConfig,
  saveConfig
};
