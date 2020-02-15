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
    this.topSys = this.registerPrinterService.getTopSys();
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
      console.log('The dialog is closed');
      console.log(result);
    });
  }
}
