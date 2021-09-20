import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTemplateViewComponent } from './block-template-view.component';

describe('BlockTypeViewComponent', () => {
  let component: BlockTemplateViewComponent;
  let fixture: ComponentFixture<BlockTemplateViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTemplateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTemplateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
