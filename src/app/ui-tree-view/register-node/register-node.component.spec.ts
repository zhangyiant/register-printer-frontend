import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterNodeComponent } from './register-node.component';

describe('RegisterNodeComponent', () => {
  let component: RegisterNodeComponent;
  let fixture: ComponentFixture<RegisterNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
