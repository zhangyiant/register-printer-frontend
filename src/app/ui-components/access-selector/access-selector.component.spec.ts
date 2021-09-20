import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessSelectorComponent } from './access-selector.component';

describe('AccessSelectorComponent', () => {
  let component: AccessSelectorComponent;
  let fixture: ComponentFixture<AccessSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
