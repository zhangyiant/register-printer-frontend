import { Component } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';


@Component({
  selector: 'app-add-block-template-dlg',
  templateUrl: './add-block-template-dlg.component.html',
  styleUrls: ['./add-block-template-dlg.component.scss']
})
export class AddBlockTemplateDlgComponent {

  public blockType: string;

  constructor(private dialogRef: MatDialogRef<AddBlockTemplateDlgComponent>) { }

  onCancelClick() {
    this.dialogRef.close();
  }
}
