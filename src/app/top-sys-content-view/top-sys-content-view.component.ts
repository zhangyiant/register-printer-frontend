import { Component, OnInit, Input } from '@angular/core';
import { TopSys } from '../top-sys';

@Component({
  selector: 'app-top-sys-content-view',
  templateUrl: './top-sys-content-view.component.html',
  styleUrls: ['./top-sys-content-view.component.scss']
})
export class TopSysContentViewComponent implements OnInit {

  @Input() topSys: TopSys;

  constructor() { }

  ngOnInit() {
  }

}
