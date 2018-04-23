import { TestBed, inject } from '@angular/core/testing';

import { RecentCommunicationService } from './recent-communication.service';

describe('RecentCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentCommunicationService]
    });
  });

  it('should be created', inject([RecentCommunicationService], (service: RecentCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
