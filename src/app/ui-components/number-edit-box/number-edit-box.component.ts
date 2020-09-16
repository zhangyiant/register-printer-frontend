import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-edit-box',
  templateUrl: './number-edit-box.component.html',
  styleUrls: ['./number-edit-box.component.scss']
})
export class NumberEditBoxComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  editingValue: string;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDoubleClick(event) {
    this.isEditing = true;
    this.editingValue = this.value.toString();
    return;
  }

  onSubmit(event) {
    this.value = parseInt(this.editingValue);
    this.isEditing = false;
    this.valueChange.emit(this.value);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }
}
