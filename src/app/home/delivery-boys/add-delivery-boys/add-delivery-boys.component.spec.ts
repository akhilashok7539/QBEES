import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryBoysComponent } from './add-delivery-boys.component';

describe('AddDeliveryBoysComponent', () => {
  let component: AddDeliveryBoysComponent;
  let fixture: ComponentFixture<AddDeliveryBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeliveryBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeliveryBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
