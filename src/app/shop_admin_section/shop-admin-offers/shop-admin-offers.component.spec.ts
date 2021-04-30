import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminOffersComponent } from './shop-admin-offers.component';

describe('ShopAdminOffersComponent', () => {
  let component: ShopAdminOffersComponent;
  let fixture: ComponentFixture<ShopAdminOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAdminOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdminOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
