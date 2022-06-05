import {RegisterPrinterConfigMgr} from 'register-printer-config';

export const registerPrinterConfigRendererApi: RegisterPrinterConfigMgr =
  (window as any).registerPrinterConfigApi as RegisterPrinterConfigMgr;
