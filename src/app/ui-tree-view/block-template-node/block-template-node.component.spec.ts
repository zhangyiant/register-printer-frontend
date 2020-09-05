import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTemplateNodeComponent } from './block-template-node.component';

describe('BlockTypeNodeComponent', () => {
  let component: BlockTemplateNodeComponent;
  let fixture: ComponentFixture<BlockTemplateNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTemplateNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTemplateNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
