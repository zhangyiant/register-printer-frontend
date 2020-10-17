import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatTable } from '@angular/material/table'
import { BlockTemplate } from '../../../register-printer';
import {
  AddRegisterDlgComponent
} from '../../ui-dialogs/add-register-dlg/add-register-dlg.component'


@Component({
  selector: 'app-block-template-view',
  templateUrl: './block-template-view.component.html',
  styleUrls: ['./block-template-view.component.scss']
})
export class BlockTemplateViewComponent implements OnInit {

  @Input() blockTemplate: BlockTemplate;
  displayedColumns: string[] = [
    'name',
    'offset',
    'description'
  ];

  @ViewChild(MatTable)
  table: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddRegister() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = "800px";
    const dlg = this.dialog.open(
      AddRegisterDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        this.blockTemplate.registers.push(result);
        this.table.renderRows();
      }
    });
  }

  onDeleteRegister() {
    console.log("Delete Register");
  }
}
