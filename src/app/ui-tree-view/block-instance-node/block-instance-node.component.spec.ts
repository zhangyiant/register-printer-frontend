import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockInstanceNodeComponent } from './block-instance-node.component';

describe('BlockInstanceNodeComponent', () => {
  let component: BlockInstanceNodeComponent;
  let fixture: ComponentFixture<BlockInstanceNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInstanceNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInstanceNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
