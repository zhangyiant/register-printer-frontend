import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}


const TREE_DATA: FoodNode[] = [
  {
    name: 'Top Sys',
    children: [
      { name: 'Author: Yi Zhang' },
      { name: 'Version: 2.1.234' },
      { name: 'Address width: 32' },
      { name: 'Data width: 32' },
      { 
        name: 'Block Types',
        children: [
          { name: 'Block Type 1' },
          { name: 'Block Type 2' }
        ]
      },
      {
        name: 'Blocks',
        children: [
          {
            name: 'Block 1',
            children: [
              { name: 'Type 1' },
              {
                name: 'Registers',
                children: [
                  { name: 'reg1' },
                  { name: 'reg2' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];


@Component({
  selector: 'app-top-sys-tree-view',
  templateUrl: './top-sys-tree-view.component.html',
  styleUrls: ['./top-sys-tree-view.component.scss']
})
export class TopSysTreeViewComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
