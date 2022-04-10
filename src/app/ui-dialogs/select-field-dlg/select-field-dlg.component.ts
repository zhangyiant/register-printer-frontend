import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {Field, Register} from '@antee/register-printer';
import {SelectRegisterDlgData} from '../select-register-dlg/select-register-dlg.component';

export interface SelectFieldDlgData {
  fields: Field[];
}

@Component({
  selector: 'app-select-field-dlg',
  templateUrl: './select-field-dlg.component.html',
  styleUrls: ['./select-field-dlg.component.scss']
})
export class SelectFieldDlgComponent implements OnInit {

  public selected: Field | [];

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
