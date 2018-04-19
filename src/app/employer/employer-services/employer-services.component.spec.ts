import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerServicesComponent } from './employer-services.component';

describe('EmployerServicesComponent', () => {
  let component: EmployerServicesComponent;
  let fixture: ComponentFixture<EmployerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
