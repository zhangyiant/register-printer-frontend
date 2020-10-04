import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {BlockInstance, TopSys} from '../../../register-printer';
import { MatTable } from '@angular/material/table'

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

  constructor() { }

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
    console.log("Delete Block Instance.")
  }
}
