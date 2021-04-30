import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopAdminOffersComponent } from './add-shop-admin-offers.component';

describe('AddShopAdminOffersComponent', () => {
  let component: AddShopAdminOffersComponent;
  let fixture: ComponentFixture<AddShopAdminOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopAdminOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopAdminOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
