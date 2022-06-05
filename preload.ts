import { contextBridge } from 'electron';


import { registerPrinterAppApi } from './register-printer-app';
import { openDialogUtilitiesApi } from './open-dialog-utilities';
import { registerPrinterConfigApi } from './register-printer-config-api';

contextBridge.exposeInMainWorld(
    'registerPrinterAppApi',
    registerPrinterAppApi
);

contextBridge.exposeInMainWorld(
    'openDialogUtilitiesApi',
    openDialogUtilitiesApi
);

contextBridge.exposeInMainWorld(
  'regsiterPrinterConfigApi',
  registerPrinterConfigApi
);
