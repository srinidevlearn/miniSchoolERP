import { TestBed } from '@angular/core/testing';

import { OrgApiService } from './user-api.service';

describe('OrgApiService', () => {
  let service: OrgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
