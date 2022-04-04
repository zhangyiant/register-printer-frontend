import { Component, OnInit, Input } from '@angular/core';
import { Register } from '@antee/register-printer';


@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  @Input() register: Register;
  displayedColumns: string[] = [
    'name',
    'msb',
    'lsb',
    'defaultValue',
    'access',
    'description'
  ];
  constructor() { }

  ngOnInit() {
  }

}
