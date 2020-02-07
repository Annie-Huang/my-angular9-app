import { TestBed } from '@angular/core/testing';

import { EaUiService } from './ea-ui.service';

describe('EaUiService', () => {
  let service: EaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
