import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTripDetailsComponent } from './first-trip-details.component';

describe('FirstTripDetailsComponent', () => {
  let component: FirstTripDetailsComponent;
  let fixture: ComponentFixture<FirstTripDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTripDetailsComponent]
    });
    fixture = TestBed.createComponent(FirstTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
