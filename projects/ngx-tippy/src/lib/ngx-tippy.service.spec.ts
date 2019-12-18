import { TestBed } from '@angular/core/testing';

import { NgxTippyService } from './ngx-tippy.service';

describe('NgxTippyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTippyService = TestBed.get(NgxTippyService);
    expect(service).toBeTruthy();
  });
});
