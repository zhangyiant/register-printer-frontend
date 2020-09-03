import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTemplateViewComponent } from './block-template-view.component';

describe('BlockTypeViewComponent', () => {
  let component: BlockTemplateViewComponent;
  let fixture: ComponentFixture<BlockTemplateViewComponent>;

  beforeEach(async(() => {
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
