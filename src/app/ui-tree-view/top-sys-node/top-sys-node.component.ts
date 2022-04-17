import { Component, Input } from '@angular/core';
import { TopSysTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-top-sys-node',
  templateUrl: './top-sys-node.component.html',
  styleUrls: ['./top-sys-node.component.scss']
})
export class TopSysNodeComponent {

  @Input() topSysTreeNode: TopSysTreeNode;

  constructor() { }

}
