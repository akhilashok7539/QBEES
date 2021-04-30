import { TestBed } from '@angular/core/testing';

import { EasydealService } from './easydeal.service';

describe('EasydealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasydealService = TestBed.get(EasydealService);
    expect(service).toBeTruthy();
  });
});
