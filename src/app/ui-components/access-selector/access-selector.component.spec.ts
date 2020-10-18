import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSelectorComponent } from './access-selector.component';

describe('AccessSelectorComponent', () => {
  let component: AccessSelectorComponent;
  let fixture: ComponentFixture<AccessSelectorComponent>;

  beforeEach(async(() => {
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
