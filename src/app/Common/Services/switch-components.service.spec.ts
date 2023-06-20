import { TestBed } from '@angular/core/testing';

import { SwitchComponentsService } from './switch-components.service';

describe('SwitchComponentsService', () => {
  let service: SwitchComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
