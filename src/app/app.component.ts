import { Component } from '@angular/core';
import { TopSys } from './top-sys';
import { BlockType } from './block-type';

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
    this.topSys.addressWidth = 12;
    this.topSys.dataWidth = 32;
    let blockType: BlockType; 
    blockType = new BlockType('Block Type1', 65536, 12, 32);
    this.topSys.addBlockType(blockType);
    blockType = new BlockType('Block Type2', 16, 24, 64);
    this.topSys.addBlockType(blockType);
    return;
  }

}
