import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysViewComponent } from './top-sys-view.component';

describe('TopSysViewComponent', () => {
  let component: TopSysViewComponent;
  let fixture: ComponentFixture<TopSysViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
