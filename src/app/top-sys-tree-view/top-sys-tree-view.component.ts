import {
  Component,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output
} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {
  TopSys,
  BlockType,
  Block,
  Register,
  Field
} from '../../register-printer';

export interface RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
}

export class TopSysTreeNode implements RegisterPrinterTreeNode {
  type: string;
  topSys: TopSys;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'TopSysNode';
  }
}

export class PropertyTreeNode implements RegisterPrinterTreeNode {
  type: string;
  name: string;
  value: string | number;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'PropertyNode';
  }
}

export class BlockTypesTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockTypesNode';
  }
}

export class BlockTypeTreeNode implements RegisterPrinterTreeNode {
  type: string;
  blockType: BlockType;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockTypeNode';
  }

}

export class RegistersTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'RegistersNode';
  }
}

export class RegisterTreeNode implements RegisterPrinterTreeNode {
  type: string;
  register: Register;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'RegisterNode';
  }
}

export class FieldsTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'FieldsNode';
  }
}

export class FieldTreeNode implements RegisterPrinterTreeNode {
  type: string;
  field: Field;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'FieldNode';
  }
}

let TREE_DATA: RegisterPrinterTreeNode[] = [];

@Component({
  selector: 'app-top-sys-tree-view',
  templateUrl: './top-sys-tree-view.component.html',
  styleUrls: ['./top-sys-tree-view.component.scss']
})
export class TopSysTreeViewComponent implements OnInit, OnChanges {

  @Input() topSys: TopSys;
  @Output() selected = new EventEmitter<TopSys | BlockType | Block | Register | Field>();

  treeControl = new NestedTreeControl<RegisterPrinterTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<RegisterPrinterTreeNode>();

  constructor() {
  }
  hasChild = (_: number, node: RegisterPrinterTreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

  updateTopSys(topSys: TopSys) {
    TREE_DATA = [];
    const topSysNode: TopSysTreeNode = new TopSysTreeNode();
    topSysNode.topSys = topSys;
    topSysNode.children = [];
    let propertyNode: PropertyTreeNode;
    propertyNode = new PropertyTreeNode();
    propertyNode.name = 'Author';
    propertyNode.value = topSys.author;
    topSysNode.children.push(propertyNode);
    propertyNode = new PropertyTreeNode();
    propertyNode.name = 'Version';
    propertyNode.value = topSys.version;
    topSysNode.children.push(propertyNode);
    propertyNode = new PropertyTreeNode();
    propertyNode.name = 'AddressWidth';
    propertyNode.value = topSys.addressWidth;
    topSysNode.children.push(propertyNode);
    propertyNode = new PropertyTreeNode();
    propertyNode.name = 'DataWidth';
    propertyNode.value = topSys.dataWidth;
    topSysNode.children.push(propertyNode);
    const blockTypesTreeNode = new BlockTypesTreeNode();
    blockTypesTreeNode.children = [];
    topSysNode.children.push(blockTypesTreeNode);
    for (const blockType of topSys.blockTypes) {
      const blockTypeTreeNode: BlockTypeTreeNode = new BlockTypeTreeNode();
      blockTypeTreeNode.children = [];
      blockTypeTreeNode.blockType = blockType;
      propertyNode = new PropertyTreeNode();
      propertyNode.name = 'size';
      propertyNode.value = blockType.size;
      blockTypeTreeNode.children.push(propertyNode);
      propertyNode = new PropertyTreeNode();
      propertyNode.name = 'AddressWidth';
      propertyNode.value = blockType.addressWidth;
      blockTypeTreeNode.children.push(propertyNode);
      propertyNode = new PropertyTreeNode();
      propertyNode.name = 'DataWidth';
      propertyNode.value = blockType.dataWidth;
      blockTypeTreeNode.children.push(propertyNode);
      const registersTreeNode = new RegistersTreeNode();
      registersTreeNode.children = [];
      blockTypeTreeNode.children.push(registersTreeNode);

      blockTypesTreeNode.children.push(blockTypeTreeNode);
      for (const register of blockType.registers) {
        const registerTreeNode = new RegisterTreeNode();
        registerTreeNode.register = register;
        registerTreeNode.children = [];
        const propertyTreeNode = new PropertyTreeNode();
        propertyTreeNode.name = 'offset';
        propertyTreeNode.value = register.offset;
        registerTreeNode.children.push(propertyTreeNode);
        registersTreeNode.children.push(registerTreeNode);
        const fieldsTreeNode = new FieldsTreeNode();
        fieldsTreeNode.children = [];
        registerTreeNode.children.push(fieldsTreeNode);
        for (const field of register.fields) {
          const fieldTreeNode = new FieldTreeNode();
          fieldTreeNode.field = field;
          fieldTreeNode.children = [];
          fieldsTreeNode.children.push(fieldTreeNode);
          let propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'name';
          propertyTreeNode.value = field.name;
          fieldTreeNode.children.push(propertyTreeNode);
          propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'msb';
          propertyTreeNode.value = field.msb;
          fieldTreeNode.children.push(propertyTreeNode);
          propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'lsb';
          propertyTreeNode.value = field.lsb;
          fieldTreeNode.children.push(propertyTreeNode);
          propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'default value';
          propertyTreeNode.value = field.defaultValue;
          fieldTreeNode.children.push(propertyTreeNode);
          propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'access';
          propertyTreeNode.value = field.access;
          fieldTreeNode.children.push(propertyTreeNode);
          propertyTreeNode = new PropertyTreeNode();
          propertyTreeNode.name = 'description';
          propertyTreeNode.value = field.description;
          fieldTreeNode.children.push(propertyTreeNode);
        }
      }
    }
    TREE_DATA.push(topSysNode);
    this.dataSource.data = TREE_DATA;
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'topSys') {
        this.updateTopSys(changes[propName].currentValue);
      }
    }
  }
  onClick(node: RegisterPrinterTreeNode) {
    if (node instanceof TopSysTreeNode) {
      this.selected.emit(node.topSys);
    } else if (node instanceof BlockTypeTreeNode) {
      this.selected.emit(node.blockType);
    } else if (node instanceof RegisterTreeNode) {
      this.selected.emit(node.register);
    } else if (node instanceof FieldTreeNode) {
      this.selected.emit(node.field);
    }
    return;
  }
}
