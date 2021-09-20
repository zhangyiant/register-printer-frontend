import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistersNodeComponent } from './registers-node.component';

describe('RegistersNodeComponent', () => {
  let component: RegistersNodeComponent;
  let fixture: ComponentFixture<RegistersNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
