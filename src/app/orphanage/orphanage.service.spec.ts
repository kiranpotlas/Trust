import { TestBed } from '@angular/core/testing';

import { OrphanageService } from './orphanage.service';

describe('OrphanageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrphanageService = TestBed.get(OrphanageService);
    expect(service).toBeTruthy();
  });
});
