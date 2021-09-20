import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescriptionEditDlgComponent } from './description-edit-dlg.component';

describe('DescriptionEditDlgComponent', () => {
  let component: DescriptionEditDlgComponent;
  let fixture: ComponentFixture<DescriptionEditDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionEditDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionEditDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
