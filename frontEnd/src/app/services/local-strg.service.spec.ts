import { TestBed } from '@angular/core/testing';

import { LocalStrgService } from './local-strg.service';

describe('LocalStrgService', () => {
  let service: LocalStrgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStrgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
