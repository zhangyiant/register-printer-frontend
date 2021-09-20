import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FieldsViewComponent } from './fields-view.component';

describe('FieldsViewComponent', () => {
  let component: FieldsViewComponent;
  let fixture: ComponentFixture<FieldsViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
