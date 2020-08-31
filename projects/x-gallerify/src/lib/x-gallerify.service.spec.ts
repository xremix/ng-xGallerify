import { TestBed } from '@angular/core/testing';

import { XGallerifyService } from './x-gallerify.service';

describe('XGallerifyService', () => {
  let service: XGallerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XGallerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
