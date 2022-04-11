import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ArrayTemplate} from '@antee/register-printer';

@Component({
  selector: 'app-add-array-dlg',
  templateUrl: './add-array-dlg.component.html',
  styleUrls: ['./add-array-dlg.component.scss']
})
export class AddArrayDlgComponent implements OnInit {

  public arrayTemplate: ArrayTemplate;

  constructor(private dialogRef: MatDialogRef<AddArrayDlgComponent>) {
    this.arrayTemplate = new ArrayTemplate(
      '',
      0,
      0,
      0,
      0,
      ''
    );
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
