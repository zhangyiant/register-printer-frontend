import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditBoxComponent } from './number-edit-box.component';

describe('NumberEditBoxComponent', () => {
  let component: NumberEditBoxComponent;
  let fixture: ComponentFixture<NumberEditBoxComponent>;

  beforeEach(async(() => {
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
