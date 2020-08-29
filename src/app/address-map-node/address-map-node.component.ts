import { Component, OnInit, Input } from '@angular/core';
import { BlockInstanceTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-address-map-node',
  templateUrl: './address-map-node.component.html',
  styleUrls: ['./address-map-node.component.scss']
})
export class AddressMapNodeComponent implements OnInit {

  @Input() addressMapTreeNode: BlockInstanceTreeNode;

  constructor() { }

  ngOnInit(): void {
  }

}
