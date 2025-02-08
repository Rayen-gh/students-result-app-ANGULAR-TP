import { TestBed } from '@angular/core/testing';

import { SharingTableService } from './sharing-table.service';

describe('SharingTableService', () => {
  let service: SharingTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
