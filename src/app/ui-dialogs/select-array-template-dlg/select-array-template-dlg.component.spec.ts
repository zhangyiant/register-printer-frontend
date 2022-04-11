import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArrayTemplateDlgComponent } from './select-array-template-dlg.component';

describe('SelectArrayTemplateDlgComponent', () => {
  let component: SelectArrayTemplateDlgComponent;
  let fixture: ComponentFixture<SelectArrayTemplateDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectArrayTemplateDlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArrayTemplateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
