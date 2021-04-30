import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminOrdersComponent } from './shop-admin-orders.component';

describe('ShopAdminOrdersComponent', () => {
  let component: ShopAdminOrdersComponent;
  let fixture: ComponentFixture<ShopAdminOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAdminOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
