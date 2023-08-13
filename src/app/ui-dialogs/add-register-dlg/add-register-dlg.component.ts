import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterTemplate } from '@antee/register-printer';
import * as M from 'minimatch';

export interface AddRegisterDlgData {
  offset: number;
}

@Component({
  selector: 'app-add-register-dlg',
  templateUrl: './add-register-dlg.component.html',
  styleUrls: ['./add-register-dlg.component.scss']
})
export class AddRegisterDlgComponent {

  public nameStr: string;
  public offsetStr: string;
  public descriptionStr: string;

  public register: RegisterTemplate;

  constructor(
    private dialogRef: MatDialogRef<AddRegisterDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddRegisterDlgData
    ) {
    this.register = new RegisterTemplate('', 0, '');
    this.register.offset = data.offset;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
