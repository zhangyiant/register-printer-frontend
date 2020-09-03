import { Component, OnInit, Input } from '@angular/core';
import { BlockTemplate } from '../../../register-printer';


@Component({
  selector: 'app-block-template-view',
  templateUrl: './block-template-view.component.html',
  styleUrls: ['./block-template-view.component.scss']
})
export class BlockTemplateViewComponent implements OnInit {

  @Input() blockType: BlockTemplate;

  constructor() { }

  ngOnInit() {
  }

}
