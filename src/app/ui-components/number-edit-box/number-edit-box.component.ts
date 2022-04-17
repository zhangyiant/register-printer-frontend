import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-number-edit-box',
  templateUrl: './number-edit-box.component.html',
  styleUrls: ['./number-edit-box.component.scss']
})
export class NumberEditBoxComponent {

  @Input() title: string;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  editingValue: string;
  isEditing = false;

  constructor() { }

  onDoubleClick(event) {
    this.isEditing = true;
    this.editingValue = this.value.toString();
    return;
  }

  onSubmit(event) {
    this.value = parseInt(this.editingValue, 10);
    this.isEditing = false;
    this.valueChange.emit(this.value);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }
}
