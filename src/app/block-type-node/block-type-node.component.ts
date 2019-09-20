import { Component, OnInit, Input } from '@angular/core';
import { BlockTypeTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-block-type-node',
  templateUrl: './block-type-node.component.html',
  styleUrls: ['./block-type-node.component.scss']
})
export class BlockTypeNodeComponent implements OnInit {

  @Input() blockTypeTreeNode: BlockTypeTreeNode;

  constructor() { }

  ngOnInit() {
  }

}
