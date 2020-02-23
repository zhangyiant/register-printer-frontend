import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapNodeComponent } from './address-map-node.component';

describe('AddressMapNodeComponent', () => {
  let component: AddressMapNodeComponent;
  let fixture: ComponentFixture<AddressMapNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressMapNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
