import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailsComponentComponent } from './passenger-details-component.component';

describe('PassengerDetailsComponentComponent', () => {
  let component: PassengerDetailsComponentComponent;
  let fixture: ComponentFixture<PassengerDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(PassengerDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
