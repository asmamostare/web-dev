import { TestBed } from '@angular/core/testing';

import { APIEmployeeService } from './api-employee.service';

describe('APIEmployeeService', () => {
  let service: APIEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
