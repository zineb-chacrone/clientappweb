import { TestBed } from '@angular/core/testing';

import { ClientdataService } from './clientdata.service';

describe('ClientdataService', () => {
  let service: ClientdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
