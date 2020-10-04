import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEditBoxComponent } from './description-edit-box.component';

describe('DescriptionEditBoxComponent', () => {
  let component: DescriptionEditBoxComponent;
  let fixture: ComponentFixture<DescriptionEditBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
