import { TestBed } from '@angular/core/testing';

import { ApiPeopleService } from './api-people.service';

describe('ApiPeopleService', () => {
  let service: ApiPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
