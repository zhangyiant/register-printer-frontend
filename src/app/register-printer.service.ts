import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  TopSys,
  BlockTemplate
} from '../register-printer';
import { RegisterPrinterDoc } from './register-printer-doc';
import * as child_process from 'child_process';
import { app } from '@electron/remote';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as _ from 'lodash';
import * as process from 'process';


@Injectable({
  providedIn: 'root'
})
export class RegisterPrinterService {

  registerPrinterDoc: RegisterPrinterDoc;
  topSys: TopSys;

  documentOpenedSource = new Subject<TopSys>();
  documentOpened$ = this.documentOpenedSource.asObservable();

  registerPrinterOutputSource = new Subject<string>();
  registerPrinterOutput$ = this.registerPrinterOutputSource.asObservable();

  registerPrinterStartSource = new Subject<boolean>();
  registerPrinterStart$ = this.registerPrinterStartSource.asObservable();

  private registerPrinterDocsUrl = 'register-printer/api/register-printer-docs';

  constructor(
    private http: HttpClient,
    private ngZone: NgZone) {
    return;
  }

  getTopSys(): TopSys {
    return this.topSys;
  }

  getRegisterPrinterDocs(): Observable<RegisterPrinterDoc[]> {
    return this.http.get<RegisterPrinterDoc[]>(
      this.registerPrinterDocsUrl);
  }

  parseDoc(strDoc: string): TopSys | null {
    const jsonObj: object = JSON.parse(strDoc);
    const topSys = TopSys.parseJson(jsonObj);
    return topSys;
  }
  openDoc(docId: number) {
    this.http.get<RegisterPrinterDoc>(
      `${this.registerPrinterDocsUrl}/${docId}/`
    ).subscribe(
      doc => {
        this.registerPrinterDoc = doc;
        const topSys: TopSys = this.parseDoc(doc.doc);
        this.topSys = topSys;
        this.documentOpenedSource.next(topSys);
      });
    return;
  }
  saveDoc(topSys: TopSys) {
    if (this.registerPrinterDoc) {
      const jsonObj: object = topSys.toJson();
      this.registerPrinterDoc.doc = JSON.stringify(jsonObj);
      this.http.put<RegisterPrinterDoc>(
        `${this.registerPrinterDocsUrl}/${this.registerPrinterDoc.rp_doc_id}/`,
        this.registerPrinterDoc).subscribe(
          doc => {
            console.log(doc);
          });
    } else {
      console.log('Error');
    }
    return;
  }

  getVersion(): string {
    return app.getVersion();
  }

  getRegisterPrinterPath() {
    // const appPath = app.getAppPath();

    // let appName;

    // if (process.platform === 'darwin') {
    //   appName = 'RegisterPrinter';
    // } else if (process.platform === 'win32') {
    //   appName = 'RegisterPrinter.exe';
    // } else {
    //   throw new Error('Unsupported OS');
    // }
    // const folderName = path.basename(appPath);
    // let registerPrinterApp = null;
    // if (folderName.endsWith('.asar')) {
    //   const unpackedAppPath = path.join(
    //     path.dirname(appPath),
    //     'app.asar.unpacked'
    //   );

    //   registerPrinterApp = path.join(
    //     unpackedAppPath,
    //     'app',
    //     appName);
    // } else {
    //   registerPrinterApp = path.join(
    //     appPath,
    //     'app',
    //     appName);
    // }

    // return registerPrinterApp;
  }

  exportExcels(output: string) {
    // this.registerPrinterStartSource.next(true);
    // const jsonObj = this.topSys.toJson();
    // const jsonString = JSON.stringify(jsonObj);
    // const filename = path.join(os.tmpdir(), 'register-printer.json');
    // fs.writeFile(filename, jsonString, err => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   const registerPrinterApp = this.getRegisterPrinterPath();
    //   const args: string[] = [];
    //   args.push('--input-json');
    //   args.push(filename);
    //   args.push('-o');
    //   args.push(output);
    //   args.push('--gen-excel');
    //   const appProcess = child_process.spawn(
    //     registerPrinterApp, args
    //   );
    //   appProcess.stdout.on('data', (data) => {
    //     this.ngZone.run(
    //       () => {
    //         if (data) {
    //           this.registerPrinterOutputSource.next(
    //             data.toString());
    //         }
    //       }
    //     );
    //   });
    //   appProcess.stderr.on('data', (data) => {
    //     this.ngZone.run(
    //       () => {
    //         if (data) {
    //           this.registerPrinterOutputSource.next(
    //             data.toString());
    //         }
    //       }
    //     );
    //   });
    //   appProcess.on('exit', (code) => {
    //     this.ngZone.run(() => {
    //       this.registerPrinterOutputSource.next(
    //         'Exported successfully');
    //     });
    //   });
    // });
  }

  generate(generateConfig) {
    // this.registerPrinterStartSource.next(true);

    // const registerPrinterApp = this.getRegisterPrinterPath();
    // const args: string[] = [];
    // args.push('-f');
    // args.push(generateConfig.configFile);
    // args.push('-p');
    // args.push(generateConfig.excelPath);
    // args.push('-o');
    // args.push(generateConfig.outputPath);
    // if (generateConfig.genDoc) {
    //   args.push('--gen-doc');
    // }
    // if (generateConfig.genC) {
    //   args.push('--gen-c-header');
    // }
    // if (generateConfig.genUvm) {
    //   args.push('--gen-uvm');
    // }
    // if (generateConfig.genRtl) {
    //   args.push('--gen-rtl');
    // }
    // args.push('--gen-json');
    // const appProcess = child_process.spawn(
    //   registerPrinterApp, args
    // );
    // appProcess.stdout.on('data', (data) => {
    //   this.ngZone.run(
    //     () => {
    //       if (data) {
    //         this.registerPrinterOutputSource.next(
    //           data.toString());
    //       }
    //     }
    //   );
    // });
    // appProcess.stderr.on('data', (data) => {
    //   this.ngZone.run(
    //     () => {
    //       if (data) {
    //         this.registerPrinterOutputSource.next(
    //           data.toString());
    //       }
    //     }
    //   );
    // });
    // appProcess.on('exit', (code) => {
    //   const filename: string = path.join(
    //     generateConfig.outputPath,
    //     'register_printer.json'
    //   );
    //   fs.readFile(filename, (err, data) => {
    //     // Check for errors
    //     if (err) {
    //       throw err;
    //     }
    //     // Converting to JSON
    //     this.ngZone.run(() => {
    //       const topSys: TopSys = this.parseDoc(data.toString());
    //       this.topSys = topSys;
    //       this.documentOpenedSource.next(topSys);
    //     });
    //   });
    // });
  }

  exportJson(outputFilename: string) {
    // this.registerPrinterStartSource.next(true);
    // const jsonObj = this.topSys.toJson();
    // const jsonString = JSON.stringify(jsonObj);
    // fs.writeFile(outputFilename, jsonString, err => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     this.ngZone.run(
    //       () => {
    //         this.registerPrinterOutputSource.next(
    //           `JSON file is written to ${outputFilename}`
    //         );
    //       }
    //     );
    //   }
    // });
  }

  createDoc(): TopSys {
    const topSys: TopSys = new TopSys(
      'NewTopSys',
      32,
      32
    );
    topSys.version = "1.0.0";
    topSys.author = "Unknown";
    return topSys;
  }

  newDoc() {
    this.ngZone.run(() => {
      const topSys: TopSys = this.createDoc();
      this.topSys = topSys;
      this.documentOpenedSource.next(topSys);
    });
  }
  loadJson(jsonFilename: string) {

    // this.registerPrinterStartSource.next(true);

    // const registerPrinterApp = this.getRegisterPrinterPath();
    // const args: string[] = [];
    // args.push('--input-json');
    // args.push(jsonFilename);
    // args.push('-o');
    // args.push(os.tmpdir());
    // args.push('--gen-json');
    // const appProcess = child_process.spawn(
    //   registerPrinterApp, args
    // );
    // appProcess.stdout.on('data', (data) => {
    //   this.ngZone.run(
    //     () => {
    //       if (data) {
    //         this.registerPrinterOutputSource.next(
    //           data.toString());
    //       }
    //     }
    //   );
    // });
    // appProcess.stderr.on('data', (data) => {
    //   this.ngZone.run(
    //     () => {
    //       if (data) {
    //         this.registerPrinterOutputSource.next(
    //           data.toString());
    //       }
    //     }
    //   );
    // });
    // appProcess.on('exit', (code) => {
    //   const filename: string = path.join(
    //     os.tmpdir(),
    //     'register_printer.json'
    //   );
    //   fs.readFile(filename, (err, data) => {
    //     // Check for errors
    //     if (err) {
    //       throw err;
    //     }
    //     // Converting to JSON
    //     this.ngZone.run(() => {
    //       const topSys: TopSys = this.parseDoc(data.toString());
    //       this.topSys = topSys;
    //       this.documentOpenedSource.next(topSys);
    //     });
    //   });
    // });
  }

  generateAll(outputPath: string) {

    // this.registerPrinterStartSource.next(true);
    // const jsonObj = this.topSys.toJson();
    // const jsonString = JSON.stringify(jsonObj);
    // const filename = path.join(os.tmpdir(), 'register-printer.json');
    // fs.writeFile(filename, jsonString, err => {
    //   if (err) {
    //     console.log(err);
    //   }

    //   const registerPrinterApp = this.getRegisterPrinterPath();
    //   const args: string[] = [];
    //   args.push('--input-json');
    //   args.push(filename);
    //   args.push('-o');
    //   args.push(outputPath);
    //   args.push('--gen-doc');
    //   args.push('--gen-c-header');
    //   args.push('--gen-uvm');
    //   args.push('--gen-rtl');
    //   args.push('--gen-json');
    //   const appProcess = child_process.spawn(
    //     registerPrinterApp, args
    //   );
    //   appProcess.stdout.on('data', (data) => {
    //     this.ngZone.run(
    //       () => {
    //         if (data) {
    //           this.registerPrinterOutputSource.next(
    //             data.toString());
    //         }
    //       }
    //     );
    //   });
    //   appProcess.stderr.on('data', (data) => {
    //     this.ngZone.run(
    //       () => {
    //         if (data) {
    //           this.registerPrinterOutputSource.next(
    //             data.toString());
    //         }
    //       }
    //     );
    //   });
    // });
    return;
  }

  addBlockTemplate(blockType: string) {
    const blockTemplate = new BlockTemplate(blockType);
    this.topSys.blockTemplates.push(blockTemplate);
    this.documentOpenedSource.next(this.topSys);
    return;
  }

  removeBlockTemplate(blockTemplate: BlockTemplate) {
    _.remove(this.topSys.blockInstances,
      (item) => {
        return item.blockType === blockTemplate.blockType;
      });
    _.remove(this.topSys.blockTemplates,
      (item) => {
        return item === blockTemplate;
      });
    this.documentOpenedSource.next(this.topSys);
  }
}
