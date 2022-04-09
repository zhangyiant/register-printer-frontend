import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertyNodeComponent } from './property-node.component';

describe('PropertyNodeComponent', () => {
  let component: PropertyNodeComponent;
  let fixture: ComponentFixture<PropertyNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
