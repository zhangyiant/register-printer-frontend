import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEditDlgComponent } from './description-edit-dlg.component';

describe('DescriptionEditDlgComponent', () => {
  let component: DescriptionEditDlgComponent;
  let fixture: ComponentFixture<DescriptionEditDlgComponent>;

  beforeEach(async(() => {
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
