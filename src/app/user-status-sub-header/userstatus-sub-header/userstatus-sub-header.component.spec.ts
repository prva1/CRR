import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstatusSubHeaderComponent } from './userstatus-sub-header.component';

describe('UserstatusSubHeaderComponent', () => {
  let component: UserstatusSubHeaderComponent;
  let fixture: ComponentFixture<UserstatusSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstatusSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstatusSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
