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
import { RegisterPrinterService } from '../register-printer.service';
import {
  TopSys,
  AddressMap,
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

export class AddressMapsTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = "AddressMapsNode";
  }
}

export class AddressMapTreeNode implements RegisterPrinterTreeNode {
  type: string;
  addressMap: AddressMap;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = "AddressMapNode";
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
  @Output() selected = new EventEmitter<TopSys | AddressMap | BlockType | Block | Register | Field>();

  treeControl = new NestedTreeControl<RegisterPrinterTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<RegisterPrinterTreeNode>();

  constructor(
    private registerPrinterService: RegisterPrinterService) {
  }
  hasChild = (_: number, node: RegisterPrinterTreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

  updateTopSys(topSys: TopSys | null) {
    TREE_DATA = [];
    if (!topSys) {
      this.dataSource.data = TREE_DATA;
      return;
    }
    const topSysNode: TopSysTreeNode = new TopSysTreeNode();
    topSysNode.topSys = topSys;
    topSysNode.children = [];
    const addressMapsTreeNode = new AddressMapsTreeNode();
    addressMapsTreeNode.children = [];
    topSysNode.children.push(addressMapsTreeNode);
    for (const addressMap of topSys.addressMaps) {
      const addressMapTreeNode: AddressMapTreeNode = new AddressMapTreeNode();
      addressMapTreeNode.children = [];
      addressMapTreeNode.addressMap = addressMap;
      addressMapsTreeNode.children.push(addressMapTreeNode);
    }
    const blockTypesTreeNode = new BlockTypesTreeNode();
    blockTypesTreeNode.children = [];
    topSysNode.children.push(blockTypesTreeNode);
    for (const blockType of topSys.blockTypes) {
      const blockTypeTreeNode: BlockTypeTreeNode = new BlockTypeTreeNode();
      blockTypeTreeNode.children = [];
      blockTypeTreeNode.blockType = blockType;
      const registersTreeNode = new RegistersTreeNode();
      registersTreeNode.children = [];
      blockTypeTreeNode.children.push(registersTreeNode);

      blockTypesTreeNode.children.push(blockTypeTreeNode);
      for (const register of blockType.registers) {
        const registerTreeNode = new RegisterTreeNode();
        registerTreeNode.register = register;
        registerTreeNode.children = [];
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
    } else if (node instanceof AddressMapTreeNode) {
      this.selected.emit(node.addressMap);
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
