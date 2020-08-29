import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrinterNodeComponent } from './register-printer-node.component';

describe('RegisterPrinterNodeComponent', () => {
  let component: RegisterPrinterNodeComponent;
  let fixture: ComponentFixture<RegisterPrinterNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPrinterNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPrinterNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
