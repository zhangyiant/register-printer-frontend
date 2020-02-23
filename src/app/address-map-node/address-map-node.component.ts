import { Component, OnInit, Input } from '@angular/core';
import { AddressMapTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-address-map-node',
  templateUrl: './address-map-node.component.html',
  styleUrls: ['./address-map-node.component.scss']
})
export class AddressMapNodeComponent implements OnInit {

  @Input() addressMapTreeNode: AddressMapTreeNode;

  constructor() { }

  ngOnInit(): void {
  }

}
