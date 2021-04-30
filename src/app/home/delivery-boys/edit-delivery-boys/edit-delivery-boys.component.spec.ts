import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryBoysComponent } from './edit-delivery-boys.component';

describe('EditDeliveryBoysComponent', () => {
  let component: EditDeliveryBoysComponent;
  let fixture: ComponentFixture<EditDeliveryBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
