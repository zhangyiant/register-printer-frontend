import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsNodeComponent } from './fields-node.component';

describe('FieldsNodeComponent', () => {
  let component: FieldsNodeComponent;
  let fixture: ComponentFixture<FieldsNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
