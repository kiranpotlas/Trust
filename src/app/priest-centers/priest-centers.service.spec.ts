import { TestBed } from '@angular/core/testing';

import { PriestCentersService } from './priest-centers.service';

describe('PriestCentersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriestCentersService = TestBed.get(PriestCentersService);
    expect(service).toBeTruthy();
  });
});
