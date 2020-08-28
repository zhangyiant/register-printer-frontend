import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  editingValue: string;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDoubleClick(event) {
    this.isEditing = true;
    this.editingValue = this.value;
    return;
  }

  onSubmit(event) {
    this.value = this.editingValue;
    this.isEditing = false;
    this.valueChange.emit(this.value);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }
}
