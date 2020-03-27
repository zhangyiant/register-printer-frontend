import { Component, OnInit } from '@angular/core';
import { RegisterPrinterService } from '../register-printer.service';

@Component({
  selector: 'app-top-sys-console-view',
  templateUrl: './top-sys-console-view.component.html',
  styleUrls: ['./top-sys-console-view.component.scss']
})
export class TopSysConsoleViewComponent implements OnInit {
  log: string = "";
  count: number = 1;
  constructor(
    private registerPrinterService: RegisterPrinterService) {
  }

  ngOnInit() {
    this.registerPrinterService.registerPrinterOutput$.subscribe(
      (data) => {
        this.log += `${this.count}: ${data}`;
        this.count += 1;
      }
    );
    this.registerPrinterService.registerPrinterStart$.subscribe(
      (b) => {
        this.log = "";
      }
    );
  }

}
