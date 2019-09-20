import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypesNodeComponent } from './block-types-node.component';

describe('BlockTypesNodeComponent', () => {
  let component: BlockTypesNodeComponent;
  let fixture: ComponentFixture<BlockTypesNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypesNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypesNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
