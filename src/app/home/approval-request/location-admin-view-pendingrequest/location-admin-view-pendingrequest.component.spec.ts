import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAdminViewPendingrequestComponent } from './location-admin-view-pendingrequest.component';

describe('LocationAdminViewPendingrequestComponent', () => {
  let component: LocationAdminViewPendingrequestComponent;
  let fixture: ComponentFixture<LocationAdminViewPendingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAdminViewPendingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAdminViewPendingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
