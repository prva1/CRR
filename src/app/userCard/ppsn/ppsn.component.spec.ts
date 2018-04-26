import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpsnComponent } from './ppsn.component';

describe('PpsnComponent', () => {
  let component: PpsnComponent;
  let fixture: ComponentFixture<PpsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PpsnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
