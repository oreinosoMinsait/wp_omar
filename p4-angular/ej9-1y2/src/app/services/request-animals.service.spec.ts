import { TestBed } from '@angular/core/testing';

import { RequestAnimalsService } from './request-animals.service';

describe('RequestAnimalsService', () => {
  let service: RequestAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
