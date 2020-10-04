import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBlockInstanceDlgComponent } from './select-block-instance-dlg.component';

describe('SelectBlockInstanceDlgComponent', () => {
  let component: SelectBlockInstanceDlgComponent;
  let fixture: ComponentFixture<SelectBlockInstanceDlgComponent>;

  beforeEach(async(() => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
