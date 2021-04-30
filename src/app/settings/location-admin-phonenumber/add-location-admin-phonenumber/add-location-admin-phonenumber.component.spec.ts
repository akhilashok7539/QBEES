import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationAdminPhonenumberComponent } from './add-location-admin-phonenumber.component';

describe('AddLocationAdminPhonenumberComponent', () => {
  let component: AddLocationAdminPhonenumberComponent;
  let fixture: ComponentFixture<AddLocationAdminPhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocationAdminPhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationAdminPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
