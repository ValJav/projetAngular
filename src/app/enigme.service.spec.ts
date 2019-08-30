import { TestBed } from '@angular/core/testing';

import { EnigmeService } from './enigme.service';

describe('EnigmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnigmeService = TestBed.get(EnigmeService);
    expect(service).toBeTruthy();
  });
});
