import { contextBridge } from "electron";


import { registerPrinterAppApi } from "./register-printer-app";
import { openDialogUtilitiesApi } from './open-dialog-utilities';

contextBridge.exposeInMainWorld(
    "registerPrinterAppApi",
    registerPrinterAppApi
);

contextBridge.exposeInMainWorld(
    "openDialogUtilitiesApi",
    openDialogUtilitiesApi
);
