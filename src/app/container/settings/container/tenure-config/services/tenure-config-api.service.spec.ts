import { TestBed } from '@angular/core/testing';

import { TenureConfigApiService } from './tenure-config-api.service';

describe('TenureConfigApiService', () => {
  let service: TenureConfigApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenureConfigApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
