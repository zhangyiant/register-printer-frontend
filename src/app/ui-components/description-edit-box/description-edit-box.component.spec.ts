import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescriptionEditBoxComponent } from './description-edit-box.component';

describe('DescriptionEditBoxComponent', () => {
  let component: DescriptionEditBoxComponent;
  let fixture: ComponentFixture<DescriptionEditBoxComponent>;

  beforeEach(waitForAsync(() => {
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
