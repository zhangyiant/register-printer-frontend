import { Component, OnInit, Input } from '@angular/core';
import { TopSys } from '../../register-printer';

@Component({
  selector: 'app-top-sys-view',
  templateUrl: './top-sys-view.component.html',
  styleUrls: ['./top-sys-view.component.scss']
})
export class TopSysViewComponent implements OnInit {
  @Input() topSys: TopSys;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submitted");
  }
}
