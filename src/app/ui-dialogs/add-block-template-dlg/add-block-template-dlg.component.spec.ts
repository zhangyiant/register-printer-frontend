import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddBlockTemplateDlgComponent } from './add-block-template-dlg.component';

describe('AddBlockTemplateDlgComponent', () => {
  let component: AddBlockTemplateDlgComponent;
  let fixture: ComponentFixture<AddBlockTemplateDlgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlockTemplateDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlockTemplateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
