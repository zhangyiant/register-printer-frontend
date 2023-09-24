import { Component, Inject } from '@angular/core';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

import { BlockInstance } from '@antee/register-printer';

export interface DialogData {
  blockInstances: BlockInstance[];
}

@Component({
  selector: 'app-select-block-instance-dlg',
  templateUrl: './select-block-instance-dlg.component.html',
  styleUrls: ['./select-block-instance-dlg.component.scss']
})
export class SelectBlockInstanceDlgComponent {

  public selected: BlockInstance | null;

  constructor(
    private matDialogRef: MatDialogRef<SelectBlockInstanceDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onCancelClick() {
    this.matDialogRef.close();
  }
}
