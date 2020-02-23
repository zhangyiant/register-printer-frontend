import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapViewComponent } from './address-map-view.component';

describe('AddressMapViewComponent', () => {
  let component: AddressMapViewComponent;
  let fixture: ComponentFixture<AddressMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
