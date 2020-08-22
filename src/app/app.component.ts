import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  TopSys,
  BlockTemplate,
  Block,
  Register,
  Field
} from '../register-printer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { RegisterPrinterService } from './register-printer.service';
import { remote } from 'electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'register-printer-frontend';
  topSys: TopSys;
  isElectronApp = true;
  selected: TopSys | BlockTemplate | Block | Register | Field | null;

  constructor(
    private registerPrinterService: RegisterPrinterService,
    private titleService: Title,
    private dialog: MatDialog) {
    const version: string = registerPrinterService.getVersion();
    titleService.setTitle('RegisterPrinter v' + version);
    return;
  }

  ngOnInit() {
    this.registerPrinterService.documentOpened$.subscribe(
      (topSys: TopSys) => this.topSys = topSys
    );
    return;
  }

  onSelect(registerPrinterObject: TopSys | BlockTemplate | Block | Register | Field): void {
    this.selected = registerPrinterObject;
    return;
  }

  onOpenClicked() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(
      OpenDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result > 0) {
          this.registerPrinterService.openDoc(result);
        }
      }
    });
  }

  onSaveClicked() {
    this.registerPrinterService.saveDoc(
      this.topSys);
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
}
