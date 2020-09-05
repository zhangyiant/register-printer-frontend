import { Component, OnInit, Input } from '@angular/core';
import { BlockInstance } from '../../../register-printer';

@Component({
  selector: 'app-block-instance-view',
  templateUrl: './block-instance-view.component.html',
  styleUrls: ['./block-instance-view.component.scss']
})
export class BlockInstanceViewComponent implements OnInit {

  @Input() blockInstance: BlockInstance;

  constructor() { }

  ngOnInit(): void {
  }

}
