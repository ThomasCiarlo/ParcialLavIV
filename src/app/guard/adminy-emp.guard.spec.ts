import { TestBed } from '@angular/core/testing';

import { AdminyEmpGuard } from './adminy-emp.guard';

describe('AdminyEmpGuard', () => {
  let guard: AdminyEmpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminyEmpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
