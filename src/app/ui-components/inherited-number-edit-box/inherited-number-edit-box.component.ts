import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inherited-number-edit-box',
  templateUrl: './inherited-number-edit-box.component.html',
  styleUrls: ['./inherited-number-edit-box.component.scss']
})
export class InheritedNumberEditBoxComponent {

  @Input() value: number;
  @Input() inheritedValue: number;

  @Output() valueChange = new EventEmitter<number>();

  editingValue: string;
  editingIsInherited: boolean;
  isEditing = false;

  constructor() { }

  get displayValue() {
    if (this.value) {
      return this.value.toString();
    } else {
      return this.inheritedValue.toString() + '(inherited)';
    }
  }

  onDoubleClick(event) {
    this.isEditing = true;
    if (this.value === null) {
      this.editingIsInherited = true;
      this.editingValue = this.inheritedValue.toString() + '(inherited)';
    } else {
      this.editingValue = this.value.toString();
      this.editingIsInherited = false;
    }
    return;
  }

  onSubmit(event) {
    if (this.editingIsInherited) {
      this.isEditing = false;
      this.valueChange.emit(null);
    } else {
      this.value = parseInt(this.editingValue, 10);
      this.isEditing = false;
      this.valueChange.emit(this.value);
    }
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }

  onCheckBoxChange() {
    if (this.editingIsInherited) {
      this.editingValue = this.inheritedValue.toString() + '(inherited)';
    } else {
      this.editingValue = this.inheritedValue.toString();
    }
  }
}
