import {Component, Input} from '@angular/core';
import { TopSys } from '@antee/register-printer';

@Component({
  selector: 'app-top-sys-view',
  templateUrl: './top-sys-view.component.html',
  styleUrls: ['./top-sys-view.component.scss']
})
export class TopSysViewComponent {
  @Input() topSys: TopSys;

  constructor() { }

}
