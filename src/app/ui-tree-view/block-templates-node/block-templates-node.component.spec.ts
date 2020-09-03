import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTemplatesNodeComponent } from './block-templates-node.component';

describe('BlockTypesNodeComponent', () => {
  let component: BlockTemplatesNodeComponent;
  let fixture: ComponentFixture<BlockTemplatesNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTemplatesNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTemplatesNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
