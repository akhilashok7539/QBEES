import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopAdminMenuNameComponent } from './edit-shop-admin-menu-name.component';

describe('EditShopAdminMenuNameComponent', () => {
  let component: EditShopAdminMenuNameComponent;
  let fixture: ComponentFixture<EditShopAdminMenuNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopAdminMenuNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopAdminMenuNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
