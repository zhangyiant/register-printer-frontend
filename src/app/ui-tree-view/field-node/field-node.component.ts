import { Component, Input } from '@angular/core';
import { FieldTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-field-node',
  templateUrl: './field-node.component.html',
  styleUrls: ['./field-node.component.scss']
})
export class FieldNodeComponent {

  @Input() fieldTreeNode: FieldTreeNode;

  constructor() { }

}
