import { TestBed, inject } from '@angular/core/testing';

import { MovementListService } from './movement-list.service';

describe('MovementListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovementListService]
    });
  });

  it('should be created', inject([MovementListService], (service: MovementListService) => {
    expect(service).toBeTruthy();
  }));
});
