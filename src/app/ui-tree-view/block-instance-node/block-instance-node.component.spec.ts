import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockInstanceNodeComponent } from './block-instance-node.component';

describe('AddressMapNodeComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
