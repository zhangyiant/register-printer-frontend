import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysAuthorComponent } from './top-sys-author.component';
import {EditBoxComponent} from '../../edit-box/edit-box.component';

describe('TopSysAuthorComponent', () => {
  let component: TopSysAuthorComponent;
  let fixture: ComponentFixture<TopSysAuthorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSysAuthorComponent, EditBoxComponent]
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
