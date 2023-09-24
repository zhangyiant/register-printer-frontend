import { Component, Input, ViewChild } from '@angular/core';
import {BlockInstance, TopSys} from '@antee/register-printer';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import {
  SelectBlockInstanceDlgComponent,
  DialogData
} from '../../ui-dialogs/select-block-instance-dlg/select-block-instance-dlg.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-block-instances-view',
  templateUrl: './block-instances-view.component.html',
  styleUrls: ['./block-instances-view.component.scss']
})
export class BlockInstancesViewComponent {

  @Input() blockInstances: BlockInstance[];
  @Input() topSys: TopSys;
  displayedColumns: string[] = [
    'name',
    'blockType',
    'baseAddress',
    'blockSize',
    'addressWidth',
    'dataWidth'
  ];

  @ViewChild(MatTable)
  table: MatTable<any>;

  constructor(private dialog: MatDialog) { }

  onAddBlockInstance() {
    const blockInstance = new BlockInstance(
      null,
      'NewBlockInstance',
      0,
      0,
      null,
      null
    );
    this.blockInstances.push(blockInstance);
    this.table.renderRows();
  }

  onDeleteBlockInstance() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = {
      blockInstances: this.blockInstances
    };
    const dlg = this.dialog.open(
      SelectBlockInstanceDlgComponent,
      matDialogConfig);

    dlg.afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.blockInstances,
          (item) => {
            return item.name === result.name;
          });
        this.table.renderRows();
      }
    });
  }
}
