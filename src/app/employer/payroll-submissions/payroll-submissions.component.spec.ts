import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollSubmissionsComponent } from './payroll-submissions.component';

describe('PayrollSubmissionsComponent', () => {
  let component: PayrollSubmissionsComponent;
  let fixture: ComponentFixture<PayrollSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
