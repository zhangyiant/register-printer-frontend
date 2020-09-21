import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypeSelectorComponent } from './block-type-selector.component';

describe('BlockTypeSelectorComponent', () => {
  let component: BlockTypeSelectorComponent;
  let fixture: ComponentFixture<BlockTypeSelectorComponent>;

  beforeEach(async(() => {
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
