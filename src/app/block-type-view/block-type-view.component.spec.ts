import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypeViewComponent } from './block-type-view.component';

describe('BlockTypeViewComponent', () => {
  let component: BlockTypeViewComponent;
  let fixture: ComponentFixture<BlockTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
