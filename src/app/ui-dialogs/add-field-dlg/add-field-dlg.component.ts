import { Component } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { FieldTemplate } from '@antee/register-printer';


@Component({
  selector: 'app-add-field-dlg',
  templateUrl: './add-field-dlg.component.html',
  styleUrls: ['./add-field-dlg.component.scss']
})
export class AddFieldDlgComponent {

  public field: FieldTemplate;

  constructor(private dialogRef: MatDialogRef<AddFieldDlgComponent>) {
    this.field = new FieldTemplate('', 0, 0, 0, 'RW', '');
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
