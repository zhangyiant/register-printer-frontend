import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FieldNodeComponent } from './field-node.component';

describe('FieldNodeComponent', () => {
  let component: FieldNodeComponent;
  let fixture: ComponentFixture<FieldNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
