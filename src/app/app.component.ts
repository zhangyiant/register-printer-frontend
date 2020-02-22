import { Component, OnInit } from '@angular/core';
import {
  TopSys,
  BlockType,
  Block,
  Register,
  Field
} from '../register-printer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { RegisterPrinterService } from './register-printer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'register-printer-frontend';
  topSys: TopSys;
  selected: TopSys | BlockType | Block | Register | Field | null;

  constructor(
    private registerPrinterService: RegisterPrinterService,
    private dialog: MatDialog) {
    return;
  }

  ngOnInit() {
    this.registerPrinterService.documentOpened$.subscribe(
      (topSys: TopSys) => this.topSys = topSys
    );
    return;
  }

  onSelect(registerPrinterObject: TopSys | BlockType | Block | Register | Field): void {
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
}
