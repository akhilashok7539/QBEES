import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminCredentialsComponent } from './edit-admin-credentials.component';

describe('EditAdminCredentialsComponent', () => {
  let component: EditAdminCredentialsComponent;
  let fixture: ComponentFixture<EditAdminCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdminCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
