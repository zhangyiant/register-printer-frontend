import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTypeSelectorComponent } from './block-type-selector.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
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
