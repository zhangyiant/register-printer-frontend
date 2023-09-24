import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTypeSelectorComponent } from './block-type-selector.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('BlockTypeSelectorComponent', () => {
  let component: BlockTypeSelectorComponent;
  let fixture: ComponentFixture<BlockTypeSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeSelectorComponent ],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
