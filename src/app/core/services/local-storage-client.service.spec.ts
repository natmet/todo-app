import { TestBed } from '@angular/core/testing';

import { LocalStorageClientService } from './local-storage-client.service';

describe('LocalStorageClientService', () => {
  let service: LocalStorageClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
