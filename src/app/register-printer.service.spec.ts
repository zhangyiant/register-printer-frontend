import {TestBed, waitForAsync} from '@angular/core/testing';

import {RegisterPrinterService} from './register-printer.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {NgZone} from '@angular/core';

class MockHttpClient {
}

class MockNgZone {
}

describe('RegisterPrinterService', () => {
  beforeEach(
    () => TestBed.configureTestingModule({
    imports: [],
    providers: [
        {
            provider: HttpClient, useClass: MockHttpClient
        },
        {
            provider: NgZone, useClass: MockNgZone
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  );

  it('should be created', () => {
    const service: RegisterPrinterService = TestBed.inject(RegisterPrinterService);

    expect(service).toBeTruthy();
  });
});
