import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-block-template-dlg',
  templateUrl: './add-block-template-dlg.component.html',
  styleUrls: ['./add-block-template-dlg.component.scss']
})
export class AddBlockTemplateDlgComponent implements OnInit {

  public blockType: string;

  constructor(private dialogRef: MatDialogRef<AddBlockTemplateDlgComponent>) { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
