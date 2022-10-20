import { TestBed } from '@angular/core/testing';

import { ModelliService } from './modelli.service';

describe('ModelliService', () => {
  let service: ModelliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
