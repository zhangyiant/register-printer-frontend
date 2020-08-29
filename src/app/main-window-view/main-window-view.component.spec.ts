import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWindowViewComponent } from './main-window-view.component';

describe('MainWindowViewComponent', () => {
  let component: MainWindowViewComponent;
  let fixture: ComponentFixture<MainWindowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWindowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWindowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
