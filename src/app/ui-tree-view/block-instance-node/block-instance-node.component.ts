import { Component, OnInit, Input } from '@angular/core';
import { BlockInstanceTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-block-instance-node',
  templateUrl: './block-instance-node.component.html',
  styleUrls: ['./block-instance-node.component.scss']
})
export class BlockInstanceNodeComponent implements OnInit {

  @Input() blockInstanceTreeNode: BlockInstanceTreeNode;

  constructor() { }

  ngOnInit(): void {
  }

}
