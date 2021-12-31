import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {
  TopSys
} from '../../register-printer';
import { dialog, getCurrentWindow } from '@electron/remote';
import { TopSysTreeViewComponent } from '../ui-tree-view/top-sys-tree-view/top-sys-tree-view.component';
import {RegisterPrinterService} from '../register-printer.service';
import { SelectEvent } from '../select-event';

@Component({
  selector: 'app-main-window-view',
  templateUrl: './main-window-view.component.html',
  styleUrls: ['./main-window-view.component.scss']
})
export class MainWindowViewComponent implements OnInit {

  @Input() topSys: TopSys | null;
  selected: SelectEvent | null;

  @ViewChild(TopSysTreeViewComponent) treeView: TopSysTreeViewComponent;

  constructor(
    private registerPrinterService: RegisterPrinterService
  ) { }

  ngOnInit(): void {
  }

  onSelect(selectEvent: SelectEvent): void {
    this.selected = selectEvent;
    return;
  }

  onNewClicked() {
    this.registerPrinterService.newDoc();
  }

  onExportToExcelClicked() {
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
    const currentWindow = getCurrentWindow();
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
    const currentWindow = getCurrentWindow();
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
          const outputPath: string = result.filePaths[0];
          this.registerPrinterService.generateAll(
            outputPath
          );
        }
      }
    );
    return;
  }

  refresh() {
    this.treeView.refresh();
  }
}
