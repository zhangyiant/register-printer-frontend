import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USER_VISIBLE_STRINGS } from '@antee/register-printer';

@Component({
  selector: 'app-user_visible-selector',
  templateUrl: './user_visible-selector.component.html',
  styleUrls: ['./user_visible-selector.component.scss']
})
export class User_visibleSelectorComponent {

  @Input() user_visible: string;
  @Output() user_visibleChange = new EventEmitter<string>();

  public user_visibleStrings: string[];
  constructor() {
    this.user_visibleStrings = USER_VISIBLE_STRINGS;
  }

}
