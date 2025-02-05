import { TestBed } from '@angular/core/testing';

import { TimezoneServiceService } from './timezone-service.service';

describe('TimezoneServiceService', () => {
  let service: TimezoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
