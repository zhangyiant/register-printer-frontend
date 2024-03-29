import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FieldsNodeComponent } from './fields-node.component';

describe('FieldsNodeComponent', () => {
  let component: FieldsNodeComponent;
  let fixture: ComponentFixture<FieldsNodeComponent>;

  beforeEach(waitForAsync(() => {
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
