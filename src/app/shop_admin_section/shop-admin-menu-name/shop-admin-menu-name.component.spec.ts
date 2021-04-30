import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminMenuNameComponent } from './shop-admin-menu-name.component';

describe('ShopAdminMenuNameComponent', () => {
  let component: ShopAdminMenuNameComponent;
  let fixture: ComponentFixture<ShopAdminMenuNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAdminMenuNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdminMenuNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
