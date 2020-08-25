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

  editingVersion: string;

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onVersionDoubleClick(event) {
    this.isEditing = true;
    this.editingVersion = this.version;
    return;
  }

  onSubmit(event) {
    this.version = this.editingVersion;
    this.isEditing = false;
    this.versionChange.emit(this.version);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }
}
