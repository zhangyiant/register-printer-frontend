import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inherited-number-edit-box',
  templateUrl: './inherited-number-edit-box.component.html',
  styleUrls: ['./inherited-number-edit-box.component.scss']
})
export class InheritedNumberEditBoxComponent implements OnInit {

  @Input() value: number;
  @Input() inheritedValue: number;

  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
