import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInstanceViewComponent } from './block-instance-view.component';

describe('AddressMapViewComponent', () => {
  let component: BlockInstanceViewComponent;
  let fixture: ComponentFixture<BlockInstanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInstanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInstanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
