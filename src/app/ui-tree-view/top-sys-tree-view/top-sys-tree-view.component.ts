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
  BlockInstance,
  BlockTemplate,
  Block,
  Register,
  Field
} from '../../../register-printer';

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

export class BlockTemplatesTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockTemplatesNode';
  }
}

export class BlockTemplateTreeNode implements RegisterPrinterTreeNode {
  type: string;
  blockTemplate: BlockTemplate;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockTemplateNode';
  }
}

export class BlockInstancesTreeNode implements RegisterPrinterTreeNode {
  type: string;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockInstancesNode';
  }
}

export class BlockInstanceTreeNode implements RegisterPrinterTreeNode {
  type: string;
  blockInstance: BlockInstance;
  children?: RegisterPrinterTreeNode[];
  constructor() {
    this.type = 'BlockInstanceNode';
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
  @Output() selected = new EventEmitter<TopSys | BlockInstance | BlockInstance[] | BlockTemplate | Block | Register | Field>();

  treeControl = new NestedTreeControl<RegisterPrinterTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<RegisterPrinterTreeNode>();

  constructor() {
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
    const blockInstancesTreeNode = new BlockInstancesTreeNode();
    blockInstancesTreeNode.children = [];
    topSysNode.children.push(blockInstancesTreeNode);
    for (const blockInstance of topSys.blockInstances) {
      const blockInstanceTreeNode: BlockInstanceTreeNode = new BlockInstanceTreeNode();
      blockInstanceTreeNode.children = [];
      blockInstanceTreeNode.blockInstance = blockInstance;
      blockInstancesTreeNode.children.push(blockInstanceTreeNode);
    }
    const blockTemplatesTreeNode = new BlockTemplatesTreeNode();
    blockTemplatesTreeNode.children = [];
    topSysNode.children.push(blockTemplatesTreeNode);
    for (const blockType of topSys.blockTemplates) {
      const blockTemplateTreeNode: BlockTemplateTreeNode = new BlockTemplateTreeNode();
      blockTemplateTreeNode.children = [];
      blockTemplateTreeNode.blockTemplate = blockType;

      blockTemplatesTreeNode.children.push(blockTemplateTreeNode);
      for (const register of blockType.registers) {
        const registerTreeNode = new RegisterTreeNode();
        registerTreeNode.register = register;
        registerTreeNode.children = [];
        blockTemplateTreeNode.children.push(registerTreeNode);
        for (const field of register.fields) {
          const fieldTreeNode = new FieldTreeNode();
          fieldTreeNode.field = field;
          fieldTreeNode.children = [];
          registerTreeNode.children.push(fieldTreeNode);
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
    } else if (node instanceof BlockInstancesTreeNode) {
      const blockInstances: BlockInstance[] = [];
      for (const childNode of node.children) {
        const blockInstanceTreeNode = <BlockInstanceTreeNode> childNode;
        const blockInstance = blockInstanceTreeNode.blockInstance;
        blockInstances.push(blockInstance);
      }
      this.selected.emit(blockInstances);
    } else if (node instanceof BlockInstanceTreeNode) {
      this.selected.emit(node.blockInstance);
    } else if (node instanceof BlockTemplateTreeNode) {
      this.selected.emit(node.blockTemplate);
    } else if (node instanceof RegisterTreeNode) {
      this.selected.emit(node.register);
    } else if (node instanceof FieldTreeNode) {
      this.selected.emit(node.field);
    }
    return;
  }

  onDblClick(node: RegisterPrinterTreeNode) {
    this.treeControl.toggle(node);
    return;
  }
}
