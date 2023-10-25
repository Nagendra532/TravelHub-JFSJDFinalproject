import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTripListComponent } from './first-trip-list.component';

describe('FirstTripListComponent', () => {
  let component: FirstTripListComponent;
  let fixture: ComponentFixture<FirstTripListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTripListComponent]
    });
    fixture = TestBed.createComponent(FirstTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
