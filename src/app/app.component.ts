import { Component } from '@angular/core';
import { TopSys } from './top-sys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'register-printer-frontend';

  topSys: TopSys = new TopSys('Top_Module');
  constructor() {
    this.topSys.version = '2.1.234';
    this.topSys.author = 'Peter';
  }

}
