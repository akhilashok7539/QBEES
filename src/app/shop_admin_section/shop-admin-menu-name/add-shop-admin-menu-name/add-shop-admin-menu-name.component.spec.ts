import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopAdminMenuNameComponent } from './add-shop-admin-menu-name.component';

describe('AddShopAdminMenuNameComponent', () => {
  let component: AddShopAdminMenuNameComponent;
  let fixture: ComponentFixture<AddShopAdminMenuNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopAdminMenuNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopAdminMenuNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
