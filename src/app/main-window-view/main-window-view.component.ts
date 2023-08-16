import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {
  TopSys
} from '@antee/register-printer';
import { TopSysTreeViewComponent } from '../ui-tree-view/top-sys-tree-view/top-sys-tree-view.component';
import {RegisterPrinterService} from '../register-printer.service';
import { SelectEvent } from '../select-event';
import {
  openExportToExcelDialog,
  openExportToJsonDialog,
  openLoadFromJsonDialog,
  openConfigFileDialog,
  openGenerateDialog
} from '../../open-dialog-utilities';

@Component({
  selector: 'app-main-window-view',
  templateUrl: './main-window-view.component.html',
  styleUrls: ['./main-window-view.component.scss']
})
export class MainWindowViewComponent {

  @Input() topSys: TopSys | null;
  selected: SelectEvent | null;

  @ViewChild(TopSysTreeViewComponent) treeView: TopSysTreeViewComponent;

  constructor(
    private registerPrinterService: RegisterPrinterService
  ) { }

  onSelect(selectEvent: SelectEvent): void {
    this.selected = selectEvent;
    return;
  }

  onNewClicked() {
    this.registerPrinterService.newDoc();
  }

  onExportToExcelClicked() {
    openExportToExcelDialog(
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
    openExportToJsonDialog(
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
    openLoadFromJsonDialog(
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

  onLoadFromExcelClicked() {
    openConfigFileDialog(
      (result) => {
        if (!result.canceled) {
          const excelname = result.filePaths[0];
          this.registerPrinterService.exportJson(
            "__register_printer__.json"
          );
          this.registerPrinterService.addJson(
            excelname
          );
        }
      }
    );
    return;
  }



  onGenerateClicked() {
    openGenerateDialog(
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
