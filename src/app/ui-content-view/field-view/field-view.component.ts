import { Component, OnInit, Input } from '@angular/core';
import { Field } from '@antee/register-printer';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss']
})
export class FieldViewComponent implements OnInit {

  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
