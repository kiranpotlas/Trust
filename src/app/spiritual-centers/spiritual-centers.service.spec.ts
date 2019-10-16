import { TestBed } from '@angular/core/testing';

import { SpiritualCentersService } from './spiritual-centers.service';

describe('SpiritualCentersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpiritualCentersService = TestBed.get(SpiritualCentersService);
    expect(service).toBeTruthy();
  });
});
