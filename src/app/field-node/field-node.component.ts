import { Component, OnInit, Input } from '@angular/core';
import { FieldTreeNode } from '../ui-tree-view/top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-field-node',
  templateUrl: './field-node.component.html',
  styleUrls: ['./field-node.component.scss']
})
export class FieldNodeComponent implements OnInit {

  @Input() fieldTreeNode: FieldTreeNode;

  constructor() { }

  ngOnInit() {
  }

}
