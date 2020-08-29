import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TopSys } from '../register-printer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { RegisterPrinterService } from './register-printer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  topSys: TopSys;
  isElectronApp = true;

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



}
