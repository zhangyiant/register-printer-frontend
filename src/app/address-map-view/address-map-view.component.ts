import { Component, OnInit, Input } from '@angular/core';
import { BlockInstance } from '../../register-printer';

@Component({
  selector: 'app-address-map-view',
  templateUrl: './address-map-view.component.html',
  styleUrls: ['./address-map-view.component.scss']
})
export class AddressMapViewComponent implements OnInit {

  @Input() addressMap: BlockInstance;

  constructor() { }

  ngOnInit(): void {
  }

}
