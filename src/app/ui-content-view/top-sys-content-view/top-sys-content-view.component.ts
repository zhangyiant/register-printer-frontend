import { Component, OnInit, Input } from '@angular/core';
import {
  TopSys
} from '@antee/register-printer';
import {
  SelectEvent
} from '../../select-event';

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
    return this.selected?.nodeType === 'topSys';
  }

  isBlockInstance(): boolean {
    return this.selected?.nodeType === 'blockInstance';
  }
  isBlockInstances(): boolean {
    return this.selected?.nodeType === 'blockInstances';

  }
  isBlockTemplate(): boolean {
    return this.selected?.nodeType === 'blockTemplate';

  }
  isRegister(): boolean {
    return this.selected?.nodeType === 'register';

  }
  isField(): boolean {
    return this.selected?.nodeType === 'field';

  }
}
