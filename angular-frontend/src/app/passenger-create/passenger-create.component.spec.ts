import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCreateComponent } from './passenger-create.component';

describe('PassengerCreateComponent', () => {
  let component: PassengerCreateComponent;
  let fixture: ComponentFixture<PassengerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerCreateComponent]
    });
    fixture = TestBed.createComponent(PassengerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
