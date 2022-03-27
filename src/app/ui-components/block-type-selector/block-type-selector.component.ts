import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

import { BlockTemplate } from '@antee/register-printer';


@Component({
  selector: 'app-block-type-selector',
  templateUrl: './block-type-selector.component.html',
  styleUrls: ['./block-type-selector.component.scss']
})
export class BlockTypeSelectorComponent implements OnInit {

  @Input() blockType: string;
  @Input() blockTemplates: BlockTemplate[];
  @Output() blockTypeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
