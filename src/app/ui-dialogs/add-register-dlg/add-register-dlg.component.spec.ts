import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterDlgComponent } from './add-register-dlg.component';

describe('AddRegisterDlgComponent', () => {
  let component: AddRegisterDlgComponent;
  let fixture: ComponentFixture<AddRegisterDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegisterDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegisterDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
