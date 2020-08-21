import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  TopSys,
  BlockTemplate,
  Block,
  Register,
  Field
} from '../register-printer';
import { RegisterPrinterDoc } from './register-printer-doc';
import * as child_process from 'child_process';
import { remote } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';


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

  getRegisterPrinterPath() {
    const { app } = remote;

    const appPath = app.getAppPath();

    const folderName = path.basename(appPath);
    let registerPrinterApp = null;
    if (folderName.endsWith('.asar')) {
      const unpackedAppPath = path.join(
        path.dirname(appPath),
        'app.asar.unpacked'
      );

      registerPrinterApp = path.join(
        unpackedAppPath,
        'app',
        'RegisterPrinter.exe');
    } else {
      registerPrinterApp = path.join(
        appPath,
        'app',
        'RegisterPrinter.exe');
    }

    return registerPrinterApp;
  }

  exportExcels(output: string) {
    const jsonObj = this.topSys.toJson();
    console.log(jsonObj);
    const jsonString = JSON.stringify(jsonObj);
    const filename = path.join(os.tmpdir(), 'register-printer.json');
    fs.writeFile(filename, jsonString, err => {
      if (err) {
        console.log(err);
      }
      const registerPrinterApp = this.getRegisterPrinterPath();
      const args: string[] = [];
      args.push('--input-json');
      args.push(filename);
      args.push('-o');
      args.push(output);
      args.push('--gen-excel');
      console.log(args);
      const appProcess = child_process.spawn(
        registerPrinterApp, args
      );
      appProcess.stdout.on('data', (data) => {
        console.log(data.toString());
      });
      appProcess.stderr.on('data', (data) => {
        console.log(data.toString());
      });
      appProcess.on('exit', (code) => {
        console.log('Exported successfully');
      });
    });
  }

  generate(generateConfig) {
    this.registerPrinterStartSource.next(true);

    const { app } = remote;

    const registerPrinterApp = this.getRegisterPrinterPath();
    const args: string[] = [];
    args.push('-f');
    args.push(generateConfig.configFile);
    args.push('-p');
    args.push(generateConfig.excelPath);
    args.push('-o');
    args.push(generateConfig.outputPath);
    if (generateConfig.genDoc) {
      args.push('--gen-doc');
    }
    if (generateConfig.genC) {
      args.push('--gen-c-header');
    }
    if (generateConfig.genUvm) {
      args.push('--gen-uvm');
    }
    if (generateConfig.genRtl) {
      args.push('--gen-rtl');
    }
    args.push('--gen-json');
    const appProcess = child_process.spawn(
      registerPrinterApp, args
    );
    appProcess.stdout.on('data', (data) => {
      this.ngZone.run(
        () => {
          if (data) {
            this.registerPrinterOutputSource.next(
              data.toString());
          }
        }
      );
    });
    appProcess.stderr.on('data', (data) => {
      this.ngZone.run(
        () => {
          if (data) {
            this.registerPrinterOutputSource.next(
              data.toString());
          }
        }
      );
    });
    appProcess.on('exit', (code) => {
      const filename: string = path.join(
        generateConfig.outputPath,
        'register_printer.json'
      );
      fs.readFile(filename, (err, data) => {
        // Check for errors
        if (err) {
          throw err;
        }
        // Converting to JSON
        this.ngZone.run(() => {
          const topSys: TopSys = this.parseDoc(data.toString());
          this.topSys = topSys;
          this.documentOpenedSource.next(topSys);
        });
      });
    });
  }
}
