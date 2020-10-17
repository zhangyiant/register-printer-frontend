import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldDlgComponent } from './add-field-dlg.component';

describe('AddFieldDlgComponent', () => {
  let component: AddFieldDlgComponent;
  let fixture: ComponentFixture<AddFieldDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
