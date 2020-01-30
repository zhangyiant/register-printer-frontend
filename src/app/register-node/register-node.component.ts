import { Component, OnInit, Input } from '@angular/core';
import { RegisterTreeNode } from '../top-sys-tree-view/top-sys-tree-view.component';

@Component({
  selector: 'app-register-node',
  templateUrl: './register-node.component.html',
  styleUrls: ['./register-node.component.scss']
})
export class RegisterNodeComponent implements OnInit {

    @Input() registerTreeNode: RegisterTreeNode;

    constructor() { }

    ngOnInit() {
    }

}
