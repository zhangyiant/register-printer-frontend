import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInstancesViewComponent } from './block-instances-view.component';

describe('BlockInstancesViewComponent', () => {
  let component: BlockInstancesViewComponent;
  let fixture: ComponentFixture<BlockInstancesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInstancesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInstancesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
