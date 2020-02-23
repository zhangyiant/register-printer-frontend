import { Component, OnInit, Input } from '@angular/core';
import {
  TopSys,
  Block,
  AddressMap,
  BlockType,
  Register,
  Field
} from '../../register-printer';

@Component({
  selector: 'app-top-sys-content-view',
  templateUrl: './top-sys-content-view.component.html',
  styleUrls: ['./top-sys-content-view.component.scss']
})
export class TopSysContentViewComponent implements OnInit {

  @Input() registerPrinterObject: TopSys | Block | AddressMap | BlockType | Register | Field;

  constructor() { }

  ngOnInit() {
  }

  isTopSys(): boolean {
    return (this.registerPrinterObject instanceof TopSys);
  }
  isBlock(): boolean {
    return (this.registerPrinterObject instanceof Block);
  }
  isAddressMap(): boolean {
    return (this.registerPrinterObject instanceof AddressMap);
  }
  isBlockType(): boolean {
    return (this.registerPrinterObject instanceof BlockType);
  }
  isRegister(): boolean {
    return (this.registerPrinterObject instanceof Register);
  }
  isField(): boolean {
    return (this.registerPrinterObject instanceof Field);
  }
}
