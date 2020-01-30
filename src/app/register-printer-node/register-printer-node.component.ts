import { Component, OnInit, Input } from '@angular/core';
import {
  RegisterPrinterTreeNode,
  BlockTypesTreeNode,
  BlockTypeTreeNode,
  RegistersTreeNode,
  RegisterTreeNode,
  FieldsTreeNode,
  FieldTreeNode
} from '../top-sys-tree-view/top-sys-tree-view.component';

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
  isRegistersTreeNode() {
    return this.registerPrinterTreeNode instanceof RegistersTreeNode;
  }
  isRegisterTreeNode() {
    return this.registerPrinterTreeNode instanceof RegisterTreeNode;
  }
  isFieldsTreeNode() {
    return this.registerPrinterTreeNode instanceof FieldsTreeNode;
  }
  isFieldTreeNode() {
    return this.registerPrinterTreeNode instanceof FieldTreeNode;
  }
  ngOnInit() {
  }

}
