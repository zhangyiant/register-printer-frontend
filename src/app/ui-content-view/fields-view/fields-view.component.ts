import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../../register-printer';


@Component({
  selector: 'app-fields-view',
  templateUrl: './fields-view.component.html',
  styleUrls: ['./fields-view.component.scss']
})
export class FieldsViewComponent implements OnInit {

  @Input() fields: Field[];

  constructor() { }

  ngOnInit(): void {
  }

}
