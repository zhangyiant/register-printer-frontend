import { Component, OnInit, Input } from '@angular/core';
import {
  RegisterPrinterTreeNode,
  BlockTypesTreeNode,
  BlockTypeTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-register-printer-node',
  templateUrl: './register-printer-node.component.html',
  styleUrls: ['./register-printer-node.component.scss']
})
export class RegisterPrinterNodeComponent implements OnInit {

  @Input() registerPrinterTreeNode: RegisterPrinterTreeNode;

  constructor() { }

  isBlockTypesTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockTypesTreeNode;
  }
  isBlockTypeTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockTypeTreeNode;
  }
  ngOnInit() {
  }

}
