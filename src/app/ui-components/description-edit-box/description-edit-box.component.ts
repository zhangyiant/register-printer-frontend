import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-description-edit-box',
  templateUrl: './description-edit-box.component.html',
  styleUrls: ['./description-edit-box.component.scss']
})
export class DescriptionEditBoxComponent implements OnInit {

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDoubleClick() {
    console.log("on double click");
  }
}
