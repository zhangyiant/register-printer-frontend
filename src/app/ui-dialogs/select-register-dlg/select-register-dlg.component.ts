import { Component, Inject } from '@angular/core';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';
import { RegisterTemplate } from '@antee/register-printer';

export interface SelectRegisterDlgData {
  registers: RegisterTemplate[];
}

@Component({
  selector: 'app-select-register-dlg',
  templateUrl: './select-register-dlg.component.html',
  styleUrls: ['./select-register-dlg.component.scss']
})
export class SelectRegisterDlgComponent {

  public selected: RegisterTemplate | [];

  constructor(
    private matDialogRef: MatDialogRef<SelectRegisterDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectRegisterDlgData) { }

  onCancelClick() {
    this.matDialogRef.close();
  }
}
