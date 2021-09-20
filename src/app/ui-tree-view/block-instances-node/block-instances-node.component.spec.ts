import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockInstancesNodeComponent } from './block-instances-node.component';

describe('AddressMapsNodeComponent', () => {
  let component: BlockInstancesNodeComponent;
  let fixture: ComponentFixture<BlockInstancesNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInstancesNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInstancesNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
