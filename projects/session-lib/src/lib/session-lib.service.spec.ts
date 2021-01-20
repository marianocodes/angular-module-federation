import { TestBed } from '@angular/core/testing';

import { SessionLibService } from './session-lib.service';

describe('SessionLibService', () => {
  let service: SessionLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
