import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAdminPhonenumberComponent } from './location-admin-phonenumber.component';

describe('LocationAdminPhonenumberComponent', () => {
  let component: LocationAdminPhonenumberComponent;
  let fixture: ComponentFixture<LocationAdminPhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAdminPhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAdminPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
