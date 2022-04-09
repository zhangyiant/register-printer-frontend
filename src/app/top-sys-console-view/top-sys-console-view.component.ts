import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RegisterPrinterService } from '../register-printer.service';

@Component({
  selector: 'app-top-sys-console-view',
  templateUrl: './top-sys-console-view.component.html',
  styleUrls: ['./top-sys-console-view.component.scss']
})
export class TopSysConsoleViewComponent implements OnInit {

  log: string = '';
  count: number = 1;
  @ViewChild('mylog')
  mylog: ElementRef;

  constructor(
    private registerPrinterService: RegisterPrinterService) {
  }

  ngOnInit() {
    this.registerPrinterService.registerPrinterOutput$.subscribe(
      (data) => {
        this.log += `${data}`;
        this.count += 1;
        this.mylog.nativeElement.scrollTop = this.mylog.nativeElement.scrollHeight;
      }
    );
    this.registerPrinterService.registerPrinterStart$.subscribe(
      (b) => {
        this.log = '';
      }
    );
  }

}
