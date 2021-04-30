import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationAdminPhonenumberComponent } from './edit-location-admin-phonenumber.component';

describe('EditLocationAdminPhonenumberComponent', () => {
  let component: EditLocationAdminPhonenumberComponent;
  let fixture: ComponentFixture<EditLocationAdminPhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocationAdminPhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationAdminPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
