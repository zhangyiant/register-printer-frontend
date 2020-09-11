import { Component, OnInit, Input } from '@angular/core';
import { Block } from "../../../register-printer";

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() block: Block | null;

  constructor() { }

  ngOnInit() {
  }

}
