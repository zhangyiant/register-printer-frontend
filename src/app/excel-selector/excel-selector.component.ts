import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';

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

  constructor() { }

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
}
