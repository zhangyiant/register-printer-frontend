import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectBlockInstanceDlgComponent } from './select-block-instance-dlg.component';

describe('SelectBlockInstanceDlgComponent', () => {
  let component: SelectBlockInstanceDlgComponent;
  let fixture: ComponentFixture<SelectBlockInstanceDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBlockInstanceDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBlockInstanceDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
