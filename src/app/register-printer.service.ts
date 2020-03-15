import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class RegisterPrinterService {

  registerPrinterDoc: RegisterPrinterDoc;
  topSys: TopSys;

  documentOpenedSource = new Subject<TopSys>();
  documentOpened$ = this.documentOpenedSource.asObservable();

  private registerPrinterDocsUrl = "register-printer/api/register-printer-docs";

  constructor(
    private http: HttpClient) {
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

}
