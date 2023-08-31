import { TestBed } from '@angular/core/testing';

import { BackendProductService } from './backend-product.service';

describe('BackendProductService', () => {
  let service: BackendProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
