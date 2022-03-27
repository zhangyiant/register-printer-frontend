import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { BlockTemplate } from '@antee/register-printer'

export interface DialogData {
  blockTemplates: BlockTemplate[]
}

@Component({
  selector: 'app-select-block-template-dlg',
  templateUrl: './select-block-template-dlg.component.html',
  styleUrls: ['./select-block-template-dlg.component.scss']
})
export class SelectBlockTemplateDlgComponent implements OnInit {

  public selected: BlockTemplate | null;

  constructor(
    private matDialogRef: MatDialogRef<SelectBlockTemplateDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.matDialogRef.close();
  }
}
