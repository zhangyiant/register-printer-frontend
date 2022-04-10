import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterTemplate } from '@antee/register-printer';

@Component({
  selector: 'app-add-register-dlg',
  templateUrl: './add-register-dlg.component.html',
  styleUrls: ['./add-register-dlg.component.scss']
})
export class AddRegisterDlgComponent implements OnInit {

  public nameStr: string;
  public offsetStr: string;
  public descriptionStr: string;

  public register: RegisterTemplate;

  constructor(private dialogRef: MatDialogRef<AddRegisterDlgComponent>) {
    this.register = new RegisterTemplate('', 0, '');
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
