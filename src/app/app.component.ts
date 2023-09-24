import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TopSys } from '@antee/register-printer';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { RegisterPrinterService } from './register-printer.service';
import { MainWindowViewComponent } from './main-window-view/main-window-view.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  topSys: TopSys;
  isElectronApp = true;

  @ViewChild(MainWindowViewComponent) mainWindowView: MainWindowViewComponent;

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
      (topSys: TopSys) => {
        if (this.topSys === topSys) {
          this.mainWindowView.refresh();
        } else {
          this.topSys = topSys;
        }
      }
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
