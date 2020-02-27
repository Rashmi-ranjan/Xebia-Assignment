import { TestBed } from '@angular/core/testing';

import { AdminServService } from './admin-serv.service';

describe('AdminServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminServService = TestBed.get(AdminServService);
    expect(service).toBeTruthy();
  });
});
