import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-top-sys-author',
  templateUrl: './top-sys-author.component.html',
  styleUrls: ['./top-sys-author.component.scss']
})
export class TopSysAuthorComponent {

  @Input() author: string;
  @Output() authorChange = new EventEmitter<string>();

  constructor() { }

  onValueChange($event: string) {
    this.authorChange.emit($event);
  }
}
