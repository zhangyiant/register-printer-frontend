import { Component, Input } from '@angular/core';
import { RegisterTemplate } from '@antee/register-printer';


@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent {

  @Input() register: RegisterTemplate;
  displayedColumns: string[] = [
    'name',
    'msb',
    'lsb',
    'defaultValue',
    'access',
    'description'
  ];
  constructor() { }

}
