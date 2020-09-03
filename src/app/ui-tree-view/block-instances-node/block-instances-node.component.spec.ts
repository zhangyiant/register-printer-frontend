import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInstancesNodeComponent } from './block-instances-node.component';

describe('AddressMapsNodeComponent', () => {
  let component: BlockInstancesNodeComponent;
  let fixture: ComponentFixture<BlockInstancesNodeComponent>;

  beforeEach(async(() => {
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
