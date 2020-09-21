import { Component, OnInit, Input } from '@angular/core';
import {BlockInstance, TopSys} from '../../../register-printer';

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

  constructor() { }

  ngOnInit(): void {
  }

}
