import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {ArrayTemplate} from '@antee/register-printer';

export interface SelectArrayTemplateDlgData {
  arrayTemplates: ArrayTemplate[];
}

@Component({
  selector: 'app-select-array-template-dlg',
  templateUrl: './select-array-template-dlg.component.html',
  styleUrls: ['./select-array-template-dlg.component.scss']
})
export class SelectArrayTemplateDlgComponent implements OnInit {

  public selected: ArrayTemplate | [];

  constructor(
    private matDialogRef: MatDialogRef<SelectArrayTemplateDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectArrayTemplateDlgData
  ) {

  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.matDialogRef.close();
  }
}
