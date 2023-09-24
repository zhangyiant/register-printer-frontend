import { Component, Inject } from '@angular/core';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

export interface DescriptionDialogData {
  description: string;
}

@Component({
  selector: 'app-description-edit-dlg',
  templateUrl: './description-edit-dlg.component.html',
  styleUrls: ['./description-edit-dlg.component.scss']
})
export class DescriptionEditDlgComponent {

  constructor(
    private matDialogRef: MatDialogRef<DescriptionEditDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DescriptionDialogData
  ) {
  }

  onCancelClick() {
    this.matDialogRef.close();
  }
}
