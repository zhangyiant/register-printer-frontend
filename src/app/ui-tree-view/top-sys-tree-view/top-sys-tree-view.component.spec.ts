import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysTreeViewComponent } from './top-sys-tree-view.component';

describe('TopSysTreeViewComponent', () => {
  let component: TopSysTreeViewComponent;
  let fixture: ComponentFixture<TopSysTreeViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
