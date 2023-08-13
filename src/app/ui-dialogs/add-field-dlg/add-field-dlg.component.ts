import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldTemplate } from '@antee/register-printer';

export interface AddFieldDlgData {
  msb: number;
}


@Component({
  selector: 'app-add-field-dlg',
  templateUrl: './add-field-dlg.component.html',
  styleUrls: ['./add-field-dlg.component.scss']
})
export class AddFieldDlgComponent {

  public field: FieldTemplate;

  constructor(
    private dialogRef: MatDialogRef<AddFieldDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddFieldDlgData
    ) {
    this.field = new FieldTemplate('', 0, 0, 0, 'RW', '');
    this.field.msb = data.msb;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
