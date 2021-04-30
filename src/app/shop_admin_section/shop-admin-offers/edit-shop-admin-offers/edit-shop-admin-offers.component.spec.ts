import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopAdminOffersComponent } from './edit-shop-admin-offers.component';

describe('EditShopAdminOffersComponent', () => {
  let component: EditShopAdminOffersComponent;
  let fixture: ComponentFixture<EditShopAdminOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopAdminOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopAdminOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
