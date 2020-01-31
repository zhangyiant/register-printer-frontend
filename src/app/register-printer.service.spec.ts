import { TestBed } from '@angular/core/testing';

import { RegisterPrinterService } from './register-printer.service';

describe('RegisterPrinterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterPrinterService = TestBed.get(RegisterPrinterService);
    expect(service).toBeTruthy();
  });
});
