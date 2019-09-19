import { Component, OnInit, Input } from '@angular/core';
import { PropertyTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-property-node',
  templateUrl: './property-node.component.html',
  styleUrls: ['./property-node.component.scss']
})
export class PropertyNodeComponent implements OnInit {

  @Input() propertyTreeNode: PropertyTreeNode;

  constructor() { }

  ngOnInit() {
  }

}
