import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ACCESS_STRINGS } from '@antee/register-printer';

@Component({
  selector: 'app-access-selector',
  templateUrl: './access-selector.component.html',
  styleUrls: ['./access-selector.component.scss']
})
export class AccessSelectorComponent implements OnInit {

  @Input() access: string;
  @Output() accessChange = new EventEmitter<string>();

  public accessStrings: string[];
  constructor() {
    this.accessStrings = ACCESS_STRINGS;
  }

  ngOnInit(): void {
  }

}
