import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {FieldTemplate} from '@antee/register-printer';

export interface SelectFieldDlgData {
  fields: FieldTemplate[];
}

@Component({
  selector: 'app-select-field-dlg',
  templateUrl: './select-field-dlg.component.html',
  styleUrls: ['./select-field-dlg.component.scss']
})
export class SelectFieldDlgComponent implements OnInit {

  public selected: FieldTemplate | [];

  constructor(
    private matDialogRef: MatDialogRef<SelectFieldDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectFieldDlgData
  ) {

  }

  ngOnInit(): void {
  }
  onCancelClick() {
    this.matDialogRef.close();
  }
}
