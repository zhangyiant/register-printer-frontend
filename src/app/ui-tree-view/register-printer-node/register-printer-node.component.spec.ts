import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterPrinterNodeComponent } from './register-printer-node.component';

describe('RegisterPrinterNodeComponent', () => {
  let component: RegisterPrinterNodeComponent;
  let fixture: ComponentFixture<RegisterPrinterNodeComponent>;

  beforeEach(waitForAsync(() => {
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

});
