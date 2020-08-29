import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSysVersionComponent } from './top-sys-version.component';

describe('TopSysVersionComponent', () => {
  let component: TopSysVersionComponent;
  let fixture: ComponentFixture<TopSysVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
