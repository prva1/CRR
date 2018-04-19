import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCommunicationComponent } from './recent-communication.component';

describe('RecentCommunicationComponent', () => {
  let component: RecentCommunicationComponent;
  let fixture: ComponentFixture<RecentCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
