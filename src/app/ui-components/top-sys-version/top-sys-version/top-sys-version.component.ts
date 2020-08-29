import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-top-sys-version',
  templateUrl: './top-sys-version.component.html',
  styleUrls: ['./top-sys-version.component.scss']
})
export class TopSysVersionComponent implements OnInit {


  @Input() version: string;
  @Output() versionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onVersionChange(newVersion: string) {
    this.versionChange.emit(newVersion);
    return;
  }

}
