import { TestBed } from '@angular/core/testing';

import { CleanFiltersService } from './clean-filters.service';

describe('CleanFiltersService', () => {
  let service: CleanFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
