import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Register } from '@antee/register-printer';

export interface SelectRegisterDlgData {
  registers: Register[];
}

@Component({
  selector: 'app-select-register-dlg',
  templateUrl: './select-register-dlg.component.html',
  styleUrls: ['./select-register-dlg.component.scss']
})
export class SelectRegisterDlgComponent implements OnInit {

  public selected: Register | [];

  constructor(
    private matDialogRef: MatDialogRef<SelectRegisterDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectRegisterDlgData) { }

  ngOnInit(): void {
  }
  onCancelClick() {
    this.matDialogRef.close();
  }
}
