import { TestBed } from '@angular/core/testing';

import { TenureConfigFacadeService } from './tenure-config-facade.service';

describe('TenureConfigFacadeService', () => {
  let service: TenureConfigFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenureConfigFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
