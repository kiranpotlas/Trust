import { TestBed } from '@angular/core/testing';

import { OldageHomeService } from './oldage-home.service';

describe('OldageHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OldageHomeService = TestBed.get(OldageHomeService);
    expect(service).toBeTruthy();
  });
});
