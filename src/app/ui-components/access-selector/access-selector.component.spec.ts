import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessSelectorComponent } from './access-selector.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core';
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
