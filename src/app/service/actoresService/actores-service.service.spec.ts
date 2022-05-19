import { TestBed } from '@angular/core/testing';

import { ActoresServiceService } from './actores-service.service';

describe('ActoresServiceService', () => {
  let service: ActoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
