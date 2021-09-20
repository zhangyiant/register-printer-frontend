import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysConsoleViewComponent } from './top-sys-console-view.component';

describe('TopSysConsoleViewComponent', () => {
  let component: TopSysConsoleViewComponent;
  let fixture: ComponentFixture<TopSysConsoleViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysConsoleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysConsoleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
