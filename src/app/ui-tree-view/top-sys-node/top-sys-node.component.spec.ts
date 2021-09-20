import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysNodeComponent } from './top-sys-node.component';

describe('TopSysNodeComponent', () => {
  let component: TopSysNodeComponent;
  let fixture: ComponentFixture<TopSysNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
