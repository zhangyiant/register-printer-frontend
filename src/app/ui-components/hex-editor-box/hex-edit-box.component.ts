import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-hex-edit-box',
  templateUrl: './hex-edit-box.component.html',
  styleUrls: ['./hex-edit-box.component.scss']
})
export class HexEditBoxComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  hexString: string;
  editingValue: string;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('value' in changes) {
      this.hexString = changes.value.currentValue.toString(16);
    }
  }

  onDoubleClick(event) {
    this.isEditing = true;
    this.editingValue = this.hexString;
    return;
  }

  onSubmit(event) {
    this.hexString = this.editingValue;
    this.isEditing = false;
    const tmpValue: number = parseInt(this.hexString, 16);
    this.valueChange.emit(tmpValue);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }

}
