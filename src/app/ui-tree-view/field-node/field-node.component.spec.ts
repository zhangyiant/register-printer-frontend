import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldNodeComponent } from './field-node.component';

describe('FieldNodeComponent', () => {
  let component: FieldNodeComponent;
  let fixture: ComponentFixture<FieldNodeComponent>;

  beforeEach(async(() => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
