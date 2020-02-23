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
    console.log(strDoc);
    const jsonObj: object = JSON.parse(strDoc);
    const topSys = TopSys.parseJson(jsonObj);
    this.topSys = topSys;
    return this.topSys;
  }
  openDoc(docId: number) {
    this.http.get<RegisterPrinterDoc>(
      `${this.registerPrinterDocsUrl}/${docId}`
    ).subscribe(
      doc => {
        let topSys: TopSys = this.parseDoc(doc.doc);
        this.documentOpenedSource.next(topSys);
      });
    return;
  }
}
