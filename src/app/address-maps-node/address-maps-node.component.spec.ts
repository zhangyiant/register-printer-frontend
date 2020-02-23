import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapsNodeComponent } from './address-maps-node.component';

describe('AddressMapsNodeComponent', () => {
  let component: AddressMapsNodeComponent;
  let fixture: ComponentFixture<AddressMapsNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressMapsNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
