import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InheritedNumberEditBoxComponent } from './inherited-number-edit-box.component';

describe('InheritedNumberEditBoxComponent', () => {
  let component: InheritedNumberEditBoxComponent;
  let fixture: ComponentFixture<InheritedNumberEditBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritedNumberEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritedNumberEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
