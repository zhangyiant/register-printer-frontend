import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectFieldDlgComponent } from './select-field-dlg.component';

describe('SelectFieldDlgComponent', () => {
  let component: SelectFieldDlgComponent;
  let fixture: ComponentFixture<SelectFieldDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFieldDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
