import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TopSys } from '../top-sys';
import { BlockType } from '../block-type';

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
}

export class BlockTypeTreeNode implements RegisterPrinterTreeNode {
  type: string;
  blockType: BlockType;
  children?: RegisterPrinterTreeNode[];
}

let TREE_DATA: RegisterPrinterTreeNode[] = [];

@Component({
  selector: 'app-top-sys-tree-view',
  templateUrl: './top-sys-tree-view.component.html',
  styleUrls: ['./top-sys-tree-view.component.scss']
})
export class TopSysTreeViewComponent implements OnInit, OnChanges {

  @Input() topSys: TopSys;

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
      blockTypesTreeNode.children.push(blockTypeTreeNode);
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
}
