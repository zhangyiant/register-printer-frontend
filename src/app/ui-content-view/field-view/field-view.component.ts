import { Component, Input } from '@angular/core';
import { FieldTemplate } from '@antee/register-printer';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss']
})
export class FieldViewComponent {

  @Input() field: FieldTemplate;

  constructor() { }

}
