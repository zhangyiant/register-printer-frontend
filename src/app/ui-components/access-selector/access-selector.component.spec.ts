import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessSelectorComponent } from './access-selector.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AccessSelectorComponent', () => {
  let component: AccessSelectorComponent;
  let fixture: ComponentFixture<AccessSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSelectorComponent ],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
