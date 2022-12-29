import { TestBed } from '@angular/core/testing';

import { UnrealVersionService } from './unreal-version.service';

describe('UnrealVersionService', () => {
  let service: UnrealVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnrealVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
