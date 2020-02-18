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
  selectedDocId: number;

  constructor(
    public dialogRef: MatDialogRef<OpenDialogComponent>,
    private registerPrinterService: RegisterPrinterService) {
  }

  ngOnInit() {
    this.registerPrinterService.getRegisterPrinterDocs().subscribe(
      docs => {
        this.registerPrinterDocs = docs;
        if (docs.length > 0) {
          this.selectedDocId = docs[0].rp_doc_id;
        } else {
          this.selectedDocId = -1;
        }
      }
    );
  }

}
