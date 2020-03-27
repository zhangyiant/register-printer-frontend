import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';
import { RegisterPrinterService } from '../register-printer.service';


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
    private registerPrinterService: RegisterPrinterService
  ) {}

  ngOnInit(): void {
  }

  onConfigFileClicked() {
    const { dialog } = remote;
    const currentWindow = remote.getCurrentWindow();
    dialog.showOpenDialog(
      currentWindow,
      {
        properties: [
          'openFile'
        ],
        filters: [
          {
            name: 'Excel files',
            extensions: ['xlsx']
          }
        ]
      }
    ).then(
      (result) => {
        if (!result.canceled) {
          this.configFile = result.filePaths[0];
        }
      }
    );
    return;
  }

  onExcelPathClicked() {
    const { dialog } = remote;
    const currentWindow = remote.getCurrentWindow();
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
    const { dialog } = remote;
    const currentWindow = remote.getCurrentWindow();
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
