import { Component, OnInit, Input } from '@angular/core';
import {
  RegisterPrinterTreeNode,
  BlockInstancesTreeNode,
  BlockInstanceTreeNode,
  BlockTemplatesTreeNode,
  BlockTemplateTreeNode,
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

  isBlockInstancesTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockInstancesTreeNode;
  }

  isAddressMapTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockInstanceTreeNode;
  }

  isBlockTypesTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockTemplatesTreeNode;
  }
  isBlockTypeTreeNode() {
    return this.registerPrinterTreeNode instanceof BlockTemplateTreeNode;
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
