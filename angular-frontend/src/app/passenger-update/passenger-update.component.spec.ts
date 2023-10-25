import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerUpdateComponent } from './passenger-update.component';

describe('PassengerUpdateComponent', () => {
  let component: PassengerUpdateComponent;
  let fixture: ComponentFixture<PassengerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerUpdateComponent]
    });
    fixture = TestBed.createComponent(PassengerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
