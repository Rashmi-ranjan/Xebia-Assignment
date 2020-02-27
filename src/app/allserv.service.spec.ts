import { TestBed } from '@angular/core/testing';

import { AllservService } from './allserv.service';

describe('AllservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllservService = TestBed.get(AllservService);
    expect(service).toBeTruthy();
  });
});
