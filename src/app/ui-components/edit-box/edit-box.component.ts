import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent {

  @Input() title: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  editingValue: string;
  isEditing = false;

  constructor() { }

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
