import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminCredentialsComponent } from './add-admin-credentials.component';

describe('AddAdminCredentialsComponent', () => {
  let component: AddAdminCredentialsComponent;
  let fixture: ComponentFixture<AddAdminCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
