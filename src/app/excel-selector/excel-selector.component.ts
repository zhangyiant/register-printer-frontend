import { Component, NgZone, OnInit } from '@angular/core';
import { dialog, getCurrentWindow } from '@electron/remote';
import { RegisterPrinterService } from '../register-printer.service';
import { openConfigFileDialog } from '../../open-dialog-utilities';


@Component({
  selector: 'app-excel-selector',
  templateUrl: './excel-selector.component.html',
  styleUrls: ['./excel-selector.component.scss']
})
export class ExcelSelectorComponent implements OnInit {

  configFile: string;
  excelPath: string;
  outputPath: string;

  genDoc: boolean = true;
  genC: boolean = true;
  genUvm: boolean = true;
  genRtl: boolean = true;

  constructor(
    private registerPrinterService: RegisterPrinterService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
  }

  onConfigFileClicked() {
    openConfigFileDialog(
      (result) => {
        console.log(result);
        this.ngZone.run(() => {
          if (!result.canceled) {
            this.configFile = result.filePaths[0];
          }
        });
      }
    );
    return;
  }

  onExcelPathClicked() {
    const currentWindow = getCurrentWindow();
    dialog.showOpenDialog(
      currentWindow,
      {
        properties: [
          'openDirectory'
        ]
      }
    ).then(
      (result) => {
        if (!result.canceled) {
          this.excelPath = result.filePaths[0];
        }
      }
    );
    return;
  }

  onOutputPathClicked() {
    const currentWindow = getCurrentWindow();
    dialog.showOpenDialog(
      currentWindow,
      {
        properties: [
          'openDirectory'
        ]
      }
    ).then(
      (result) => {
        if (!result.canceled) {
          this.outputPath = result.filePaths[0];
        }
      }
    );
    return;
  }

  onGenerateClick() {
    const generateConfig = {
      configFile: this.configFile,
      excelPath: this.excelPath,
      outputPath: this.outputPath,
      genDoc: this.genDoc,
      genC: this.genC,
      genUvm: this.genUvm,
      genRtl: this.genRtl
    };
    this.registerPrinterService.generate(
      generateConfig
    );
    return;
  }
}
