import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectRegisterDlgComponent } from './select-register-dlg.component';

describe('SelectRegisterDlgComponent', () => {
  let component: SelectRegisterDlgComponent;
  let fixture: ComponentFixture<SelectRegisterDlgComponent>;

  beforeEach(waitForAsync(() => {
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
