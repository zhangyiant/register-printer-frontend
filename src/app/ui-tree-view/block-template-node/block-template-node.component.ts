import { Component, OnInit, Input } from '@angular/core';
import { BlockTemplateTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-block-type-node',
  templateUrl: './block-template-node.component.html',
  styleUrls: ['./block-template-node.component.scss']
})
export class BlockTemplateNodeComponent implements OnInit {

  @Input() blockTypeTreeNode: BlockTemplateTreeNode;

  constructor() { }

  ngOnInit() {
  }

}
