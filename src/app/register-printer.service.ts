import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  TopSys,
  BlockTemplate
} from '../register-printer';
import { RegisterPrinterDoc } from './register-printer-doc';
import * as _ from 'lodash';
import {
  getVersion as _getVersion,
  exportExcels as _exportExcels,
  generate as _generate,
  exportJson as _exportJson,
  loadJson as _loadJson,
  generateAll as _generateAll
} from 'src/register-printer-app';


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
    return _getVersion();
  }

  exportExcels(output: string) {
    this.registerPrinterStartSource.next(true);
    const jsonObj = this.topSys.toJson();
    const jsonString = JSON.stringify(jsonObj);
    _exportExcels(jsonString, output, 
      (data) => {
        this.ngZone.run(
          () => {
            if (data) {
              this.registerPrinterOutputSource.next(
                data.toString());
            }
          }
      )},
      (code) => {
        this.ngZone.run(() => {
          this.registerPrinterOutputSource.next(
            'Exported successfully');
        });
      }
    );
  }

  generate(generateConfig) {
    this.registerPrinterStartSource.next(true);
    _generate(
      generateConfig,
      (data) => {
        this.ngZone.run(
          () => {
            if (data) {
              this.registerPrinterOutputSource.next(
                data.toString());
            }
          }
        );
      },
      (data) => {
        // Converting to JSON
        this.ngZone.run(() => {
          const topSys: TopSys = this.parseDoc(data.toString());
          this.topSys = topSys;
          this.documentOpenedSource.next(topSys);
        });
      }
    );
  }

  exportJson(outputFilename: string) {
    this.registerPrinterStartSource.next(true);
    const jsonObj = this.topSys.toJson();
    const jsonString = JSON.stringify(jsonObj);
    _exportJson(jsonString, outputFilename, (filename: string) => {
      this.ngZone.run(
        () => {
          this.registerPrinterOutputSource.next(
            `JSON file is written to ${outputFilename}`
          );
        }
      );
    });
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

    _loadJson(jsonFilename,
      (data) => {
        this.ngZone.run(
          () => {
            if (data) {
              this.registerPrinterOutputSource.next(
                data.toString());
            }
          }
        );
      },
      (data) => {
        // Converting to JSON
        this.ngZone.run(() => {
          const topSys: TopSys = this.parseDoc(data.toString());
          this.topSys = topSys;
          this.documentOpenedSource.next(topSys);
        });
      }
    );
  }

  generateAll(outputPath: string) {
    this.registerPrinterStartSource.next(true);
    const jsonObj = this.topSys.toJson();
    const jsonString = JSON.stringify(jsonObj);
    _generateAll(jsonString, outputPath, (data) => {
      this.ngZone.run(
        () => {
          if (data) {
            this.registerPrinterOutputSource.next(
              data.toString());
          }
        }
      );
    });
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
