import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArrayDlgComponent } from './add-array-dlg.component';

describe('AddArrayDlgComponent', () => {
  let component: AddArrayDlgComponent;
  let fixture: ComponentFixture<AddArrayDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArrayDlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArrayDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
