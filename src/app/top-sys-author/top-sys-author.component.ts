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

  editingAuthor: string;

  isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAuthorDoubleClick(event) {
    this.isEditing = true;
    this.editingAuthor = this.author;
    return;
  }

  onSubmit(event) {
    this.author = this.editingAuthor;
    this.isEditing = false;
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }
}
