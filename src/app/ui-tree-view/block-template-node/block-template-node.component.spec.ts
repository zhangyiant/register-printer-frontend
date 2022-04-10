import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTemplateNodeComponent } from './block-template-node.component';

describe('BlockTypeNodeComponent', () => {
  let component: BlockTemplateNodeComponent;
  let fixture: ComponentFixture<BlockTemplateNodeComponent>;

  beforeEach(waitForAsync(() => {
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

});
