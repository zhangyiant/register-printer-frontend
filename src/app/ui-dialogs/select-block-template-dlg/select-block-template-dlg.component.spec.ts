import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectBlockTemplateDlgComponent } from './select-block-template-dlg.component';

describe('SelectBlockTemplateDlgComponent', () => {
  let component: SelectBlockTemplateDlgComponent;
  let fixture: ComponentFixture<SelectBlockTemplateDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBlockTemplateDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBlockTemplateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
