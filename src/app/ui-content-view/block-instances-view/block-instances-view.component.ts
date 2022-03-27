import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {BlockInstance, TopSys} from '@antee/register-printer';
import { MatTable } from '@angular/material/table'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import {
  SelectBlockInstanceDlgComponent,
  DialogData
} from '../../ui-dialogs/select-block-instance-dlg/select-block-instance-dlg.component'
import * as _ from 'lodash'

@Component({
  selector: 'app-block-instances-view',
  templateUrl: './block-instances-view.component.html',
  styleUrls: ['./block-instances-view.component.scss']
})
export class BlockInstancesViewComponent implements OnInit {

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

  ngOnInit(): void {
  }

  onAddBlockInstance() {
    const blockInstance = new BlockInstance(
      null,
      "NewBlockInstance",
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
    }
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
