import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSysContentViewComponent } from './top-sys-content-view.component';

describe('TopSysContentViewComponent', () => {
  let component: TopSysContentViewComponent;
  let fixture: ComponentFixture<TopSysContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
