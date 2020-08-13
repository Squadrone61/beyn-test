import { TestBed } from '@angular/core/testing';

import { FavHelperService } from './fav-helper.service';

describe('FavHelperService', () => {
  let service: FavHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
