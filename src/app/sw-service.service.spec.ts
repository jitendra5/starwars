import { TestBed, inject } from '@angular/core/testing';

import { SwServiceService } from './sw-service.service';

describe('SwServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwServiceService]
    });
  });

  it('should be created', inject([SwServiceService], (service: SwServiceService) => {
    expect(service).toBeTruthy();
  }));
});
