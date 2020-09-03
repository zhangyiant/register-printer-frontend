import { Component, OnInit, Input } from '@angular/core';
import {
  TopSys,
  Block,
  BlockInstance,
  BlockTemplate,
  Register,
  Field
} from '../../../register-printer';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-top-sys-content-view',
  templateUrl: './top-sys-content-view.component.html',
  styleUrls: ['./top-sys-content-view.component.scss']
})
export class TopSysContentViewComponent implements OnInit {

  @Input() registerPrinterObject: TopSys | Block | BlockInstance | BlockInstance[] | BlockTemplate | Register | Field;

  constructor() { }

  ngOnInit() {
  }

  isTopSys(): boolean {
    return (this.registerPrinterObject instanceof TopSys);
  }
  isBlock(): boolean {
    return (this.registerPrinterObject instanceof Block);
  }
  isBlockInstance(): boolean {
    return (this.registerPrinterObject instanceof BlockInstance);
  }
  isBlockInstances(): boolean {
    if (this.registerPrinterObject instanceof Array) {
      if (this.registerPrinterObject.length > 0) {
        const firstObject = this.registerPrinterObject[0];
        return (firstObject instanceof BlockInstance);
      } else {
        return false;
      }
    }
    return false;
  }
  isBlockTemplate(): boolean {
    return (this.registerPrinterObject instanceof BlockTemplate);
  }
  isRegister(): boolean {
    return (this.registerPrinterObject instanceof Register);
  }
  isField(): boolean {
    return (this.registerPrinterObject instanceof Field);
  }
}
