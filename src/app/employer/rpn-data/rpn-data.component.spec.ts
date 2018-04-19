import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpnDataComponent } from './rpn-data.component';

describe('RpnDataComponent', () => {
  let component: RpnDataComponent;
  let fixture: ComponentFixture<RpnDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpnDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
