import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatTable } from '@angular/material/table'
import { BlockTemplate } from '@antee/register-printer';
import {
  AddRegisterDlgComponent
} from '../../ui-dialogs/add-register-dlg/add-register-dlg.component'
import {
  SelectRegisterDlgComponent
} from '../../ui-dialogs/select-register-dlg/select-register-dlg.component';
import * as _ from 'lodash';


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
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = {
      registers: this.blockTemplate.registers
    }
    const dlg = this.dialog.open(
      SelectRegisterDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.blockTemplate.registers,
          (item) => {
            return item.name === result.name;
          });
        this.table.renderRows();
      }
    });
  }
}
