import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopSysVersionComponent } from './top-sys-version.component';
import {EditBoxComponent} from '../../edit-box/edit-box.component';

describe('TopSysVersionComponent', () => {
  let component: TopSysVersionComponent;
  let fixture: ComponentFixture<TopSysVersionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopSysVersionComponent,
        EditBoxComponent
      ]
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
