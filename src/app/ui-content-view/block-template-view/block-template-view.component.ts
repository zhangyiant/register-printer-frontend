import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { BlockTemplate } from '@antee/register-printer';
import {
  AddRegisterDlgComponent
} from '../../ui-dialogs/add-register-dlg/add-register-dlg.component';
import {
  SelectRegisterDlgComponent
} from '../../ui-dialogs/select-register-dlg/select-register-dlg.component';
import * as _ from 'lodash';
import {AddArrayDlgComponent} from '../../ui-dialogs/add-array-dlg/add-array-dlg.component';
import {SelectArrayTemplateDlgComponent} from '../../ui-dialogs/select-array-template-dlg/select-array-template-dlg.component';


@Component({
  selector: 'app-block-template-view',
  templateUrl: './block-template-view.component.html',
  styleUrls: ['./block-template-view.component.scss']
})
export class BlockTemplateViewComponent {

  @Input() blockTemplate: BlockTemplate;
  arrayTemplatesDisplayColumns: string[] = [
    'name',
    'length',
    'offset',
    'startAddress',
    'endAddress',
    'description'
  ];
  displayedColumns: string[] = [
    'name',
    'offset',
    'description'
  ];


  @ViewChild('arrayTemplateTable')
  arrayTemplateTable: MatTable<any>;

  @ViewChild('registerTemplateTable')
  registerTemplateTable: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  onAddRegister() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = '800px';
    matDialogConfig.data = {offset: 0};
    const len = this.blockTemplate.registerTemplates.length;
    if(len > 0) {
      var max_msb = -1;
      for (var i=0;i<this.blockTemplate.registerTemplates[len-1].fieldTemplates.length;i++) {
        if(this.blockTemplate.registerTemplates[len-1].fieldTemplates[i].msb > max_msb) { 
          max_msb = this.blockTemplate.registerTemplates[len-1].fieldTemplates[i].msb;
        }
      }
      matDialogConfig.data.offset = this.blockTemplate.registerTemplates[len-1].offset + (max_msb+1)/8;
    }
    const dlg = this.dialog.open(
      AddRegisterDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        this.blockTemplate.registerTemplates.push(result);
        this.registerTemplateTable.renderRows();
      }
    });
  }

  onDeleteRegister() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = {
      registers: this.blockTemplate.registerTemplates
    };
    const dlg = this.dialog.open(
      SelectRegisterDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.blockTemplate.registerTemplates,
          (item) => {
            return item.name === result.name;
          });
        this.registerTemplateTable.renderRows();
      }
    });
  }

  onAddArray() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.width = '800px';
    const dlg = this.dialog.open(
      AddArrayDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        this.blockTemplate.arrayTemplates.push(result);
        this.arrayTemplateTable.renderRows();
      }
    });
  }

  onDeleteArray() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = {
      arrayTemplates: this.blockTemplate.arrayTemplates
    };
    const dlg = this.dialog.open(
      SelectArrayTemplateDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.blockTemplate.arrayTemplates,
          (item) => {
            return item.name === result.name;
          });
        this.arrayTemplateTable.renderRows();
      }
    });
  }
}
