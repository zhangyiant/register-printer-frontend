import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  TopSys,
  BlockType,
  Block,
  Register,
  Field
} from '../register-printer';
import { RegisterPrinterDoc } from './register-printer-doc';
import * as child_process from 'child_process';
import { remote } from 'electron';
import * as path from 'path';

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

  private registerPrinterDocsUrl = "register-printer/api/register-printer-docs";

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
        let topSys: TopSys = this.parseDoc(doc.doc);
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
      console.log("Error");
    }
    return;
  }

  generate(generateConfig) {
    this.registerPrinterStartSource.next(true);

    const { app } = remote;

    const registerPrinterApp = path.join(
      app.getAppPath(),
      'app',
      'RegisterPrinter.exe');
    const args: string[] = [];
    args.push("-f");
    args.push(generateConfig["configFile"]);
    args.push("-p");
    args.push(generateConfig["excelPath"]);
    args.push("-o");
    args.push(generateConfig["outputPath"]);
    if (generateConfig["genDoc"]) {
      args.push("--gen-doc");
    }
    if (generateConfig["genC"]) {
      args.push("--gen-c-header");
    }
    if (generateConfig["genUvm"]) {
      args.push("--gen-uvm");
    }
    if (generateConfig["genRtl"]) {
      args.push("--gen-rtl")
    }
    const appProcess = child_process.execFile(
      registerPrinterApp, args, {
        maxBuffer: 100 * 1024 * 1024
      }
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
  }
}
