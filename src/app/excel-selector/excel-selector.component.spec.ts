import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSelectorComponent } from './excel-selector.component';

describe('ExcelSelectorComponent', () => {
  let component: ExcelSelectorComponent;
  let fixture: ComponentFixture<ExcelSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
