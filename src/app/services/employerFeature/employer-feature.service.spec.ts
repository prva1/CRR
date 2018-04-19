import { TestBed, inject } from '@angular/core/testing';

import { EmployerFeatureService } from './employer-feature.service';

describe('EmployerFeatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerFeatureService]
    });
  });

  it('should be created', inject([EmployerFeatureService], (service: EmployerFeatureService) => {
    expect(service).toBeTruthy();
  }));
});
