import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTypeNodeComponent } from './block-type-node.component';

describe('BlockTypeNodeComponent', () => {
  let component: BlockTypeNodeComponent;
  let fixture: ComponentFixture<BlockTypeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
