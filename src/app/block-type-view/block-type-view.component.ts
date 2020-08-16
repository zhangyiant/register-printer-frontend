import { Component, OnInit, Input } from '@angular/core';
import { BlockTemplate } from '../../register-printer';


@Component({
  selector: 'app-block-type-view',
  templateUrl: './block-type-view.component.html',
  styleUrls: ['./block-type-view.component.scss']
})
export class BlockTypeViewComponent implements OnInit {

  @Input() blockType: BlockTemplate;

  constructor() { }

  ngOnInit() {
  }

}
