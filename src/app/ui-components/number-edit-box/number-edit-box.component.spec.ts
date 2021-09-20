import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumberEditBoxComponent } from './number-edit-box.component';

describe('NumberEditBoxComponent', () => {
  let component: NumberEditBoxComponent;
  let fixture: ComponentFixture<NumberEditBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
