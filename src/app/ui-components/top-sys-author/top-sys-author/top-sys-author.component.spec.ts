import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysAuthorComponent } from './top-sys-author.component';

describe('TopSysAuthorComponent', () => {
  let component: TopSysAuthorComponent;
  let fixture: ComponentFixture<TopSysAuthorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSysAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
