import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegisterDlgComponent } from './select-register-dlg.component';

describe('SelectRegisterDlgComponent', () => {
  let component: SelectRegisterDlgComponent;
  let fixture: ComponentFixture<SelectRegisterDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRegisterDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRegisterDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
