import { TestBed } from '@angular/core/testing';

import { FeesComponentApiService } from './fees-component-api.service';

describe('FeesComponentApiService', () => {
  let service: FeesComponentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesComponentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
