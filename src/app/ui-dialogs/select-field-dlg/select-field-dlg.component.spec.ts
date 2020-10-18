import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldDlgComponent } from './select-field-dlg.component';

describe('SelectFieldDlgComponent', () => {
  let component: SelectFieldDlgComponent;
  let fixture: ComponentFixture<SelectFieldDlgComponent>;

  beforeEach(async(() => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
