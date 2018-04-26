import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCommunicationTableComponent } from './recent-communication-table.component';

describe('RecentCommunicationTableComponent', () => {
  let component: RecentCommunicationTableComponent;
  let fixture: ComponentFixture<RecentCommunicationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:/*  */ [ RecentCommunicationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCommunicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
