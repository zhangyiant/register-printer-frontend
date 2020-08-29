import { Component, OnInit, Input} from '@angular/core';
import {
  Block,
  BlockTemplate,
  Field,
  Register,
  TopSys
} from '../../register-printer';
import { remote } from 'electron';
import {RegisterPrinterService} from '../register-printer.service';

@Component({
  selector: 'app-main-window-view',
  templateUrl: './main-window-view.component.html',
  styleUrls: ['./main-window-view.component.scss']
})
export class MainWindowViewComponent implements OnInit {

  @Input() topSys: TopSys | null;
  selected: TopSys | BlockTemplate | Block | Register | Field | null;

  constructor(
    private registerPrinterService: RegisterPrinterService
  ) { }

  ngOnInit(): void {
  }

  onSelect(registerPrinterObject: TopSys | BlockTemplate | Block | Register | Field): void {
    this.selected = registerPrinterObject;
    return;
  }
  onExportToExcelClicked() {
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
          const outputPath: string = result.filePaths[0];
          this.registerPrinterService.exportExcels(
            outputPath
          );
        }
      }
    );
    return;
  }

  onExportToJsonClicked() {
    const { dialog } = remote;
    const currentWindow = remote.getCurrentWindow();
    dialog.showSaveDialog(
      currentWindow,
      {
        title: 'Export to JSON file',
        filters: [
          {
            name: 'JSON file',
            extensions: ['json']
          }
        ]
      }
    ).then(
      (result) => {
        if (!result.canceled) {
          const outputFilename: string = result.filePath;
          this.registerPrinterService.exportJson(
            outputFilename
          );
        }
      }
    );
    return;
  }

  onLoadFromJsonClicked() {
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
            name: 'JSON file',
            extensions: ['json']
          }
        ]
      }
    ).then(
      (result) => {
        if (!result.canceled) {
          const jsonFilename = result.filePaths[0];
          this.registerPrinterService.loadJson(
            jsonFilename
          );
        }
      }
    );
    return;
  }

  onGenerateClicked() {
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
          const outputPath: string = result.filePaths[0];
          this.registerPrinterService.generateAll(
            outputPath
          );
        }
      }
    );
    return;
  }
}
