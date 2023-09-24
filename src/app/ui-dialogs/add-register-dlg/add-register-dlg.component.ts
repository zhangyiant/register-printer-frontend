import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterTemplate } from '@antee/register-printer';

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

  constructor(private dialogRef: MatDialogRef<AddRegisterDlgComponent>) {
    this.register = new RegisterTemplate('', 0, '');
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
