import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-top-sys-version',
  templateUrl: './top-sys-version.component.html',
  styleUrls: ['./top-sys-version.component.scss']
})
export class TopSysVersionComponent {


  @Input() version: string;
  @Output() versionChange = new EventEmitter<string>();

  constructor() { }

  onVersionChange(newVersion: string) {
    this.versionChange.emit(newVersion);
    return;
  }

}
