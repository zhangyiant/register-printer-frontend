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
  selector: 'app-hex-editor',
  templateUrl: './hex-editor.component.html',
  styleUrls: ['./hex-editor.component.scss']
})
export class HexEditorComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  hexString: string;
  editingValue: string;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("value" in changes) {
      this.hexString = changes["value"].currentValue.toString(16);
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
    console.log("submit");
    console.log(this.hexString);
    console.log(tmpValue);
    this.valueChange.emit(tmpValue);
    return;
  }

  onCancel(event) {
    this.isEditing = false;
    return;
  }

}
