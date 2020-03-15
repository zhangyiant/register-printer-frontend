import {
  Component,
  OnInit,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-top-sys-author',
  templateUrl: './top-sys-author.component.html',
  styleUrls: ['./top-sys-author.component.scss']
})
export class TopSysAuthorComponent implements OnInit {

  @Input() author: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAuthorDoubleClick(event) {
    console.log(event);
    return;
  }
}
