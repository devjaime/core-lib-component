import { TestBed } from '@angular/core/testing';

import { CoreLibComponentService } from './core-lib-component.service';

describe('CoreLibComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreLibComponentService = TestBed.get(CoreLibComponentService);
    expect(service).toBeTruthy();
  });
});
