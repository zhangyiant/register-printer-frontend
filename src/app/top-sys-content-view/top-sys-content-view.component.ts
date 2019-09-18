import { Component, OnInit } from '@angular/core';
import { TopSys } from '../top-sys';

@Component({
  selector: 'app-top-sys-content-view',
  templateUrl: './top-sys-content-view.component.html',
  styleUrls: ['./top-sys-content-view.component.scss']
})
export class TopSysContentViewComponent implements OnInit {

  topSys: TopSys = new TopSys('HelloTopSys');

  constructor() { }

  ngOnInit() {
    this.topSys.author = 'Yi Zhang';
    this.topSys.version = '2.1.1234';
  }

}
