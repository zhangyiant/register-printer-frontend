import { Component, OnInit, Input } from '@angular/core';
import { AddressMap } from '../../register-printer';

@Component({
  selector: 'app-address-map-view',
  templateUrl: './address-map-view.component.html',
  styleUrls: ['./address-map-view.component.scss']
})
export class AddressMapViewComponent implements OnInit {

  @Input() addressMap: AddressMap;

  constructor() { }

  ngOnInit(): void {
  }

}
