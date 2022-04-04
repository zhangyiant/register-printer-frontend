import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Field } from '@antee/register-printer';


@Component({
  selector: 'app-add-field-dlg',
  templateUrl: './add-field-dlg.component.html',
  styleUrls: ['./add-field-dlg.component.scss']
})
export class AddFieldDlgComponent implements OnInit {

  public field: Field;

  constructor(private dialogRef: MatDialogRef<AddFieldDlgComponent>) {
    this.field = new Field("", 0, 0, 0, "RW", "");
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
