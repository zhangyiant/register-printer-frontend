import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterPrinterService } from '../register-printer.service';
import { RegisterPrinterDoc } from '../register-printer-doc';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class OpenDialogComponent implements OnInit {

  registerPrinterDocs: RegisterPrinterDoc[];

  constructor(
    public dialogRef: MatDialogRef<OpenDialogComponent>,
    private registerPrinterService: RegisterPrinterService) {
  }

  ngOnInit() {
    this.registerPrinterService.getRegisterPrinterDocs().subscribe(
      docs => this.registerPrinterDocs = docs
    );
  }

}
