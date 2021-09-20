import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTypeSelectorComponent } from './block-type-selector.component';

describe('BlockTypeSelectorComponent', () => {
  let component: BlockTypeSelectorComponent;
  let fixture: ComponentFixture<BlockTypeSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeSelectorComponent ]
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
