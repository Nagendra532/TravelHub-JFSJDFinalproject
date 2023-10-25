import { TestBed } from '@angular/core/testing';

import { FirsttripService } from './firsttrip.service';

describe('FirsttripService', () => {
  let service: FirsttripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirsttripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
