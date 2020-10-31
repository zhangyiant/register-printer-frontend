import { Component, OnInit, Input } from '@angular/core';
import {
  TopSys,
  BlockInstance,
  BlockTemplate,
  Register,
  Field
} from '../../../register-printer';
import {
  SelectEvent
} from '../../select-event';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-top-sys-content-view',
  templateUrl: './top-sys-content-view.component.html',
  styleUrls: ['./top-sys-content-view.component.scss']
})
export class TopSysContentViewComponent implements OnInit {

  @Input() topSys: TopSys;
  @Input() selected: SelectEvent;

  constructor() { }

  ngOnInit() {
  }

  isTopSys(): boolean {
    if (this.selected?.nodeType === 'topSys') {
      return true;
    }
    return false;
  }

  isBlockInstance(): boolean {
    if (this.selected?.nodeType === 'blockInstance') {
      return true;
    }
    return false;
  }
  isBlockInstances(): boolean {
    if (this.selected?.nodeType === 'blockInstances') {
      return true;
    }
    return false;
  }
  isBlockTemplate(): boolean {
    if (this.selected?.nodeType === 'blockTemplate') {
      return true;
    }
    return false;
  }
  isRegister(): boolean {
    if (this.selected?.nodeType === 'register') {
      return true;
    }
    return false;
  }
  isField(): boolean {
    if (this.selected?.nodeType === 'field') {
      return true;
    }
    return false;
  }
}
