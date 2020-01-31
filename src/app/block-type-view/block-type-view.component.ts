import { Component, OnInit, Input } from '@angular/core';
import { BlockType } from '../../register-printer';


@Component({
  selector: 'app-block-type-view',
  templateUrl: './block-type-view.component.html',
  styleUrls: ['./block-type-view.component.scss']
})
export class BlockTypeViewComponent implements OnInit {

  @Input() blockType: BlockType;

  constructor() { }

  ngOnInit() {
  }

}
