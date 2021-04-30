import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopMenuComponent } from './edit-shop-menu.component';

describe('EditShopMenuComponent', () => {
  let component: EditShopMenuComponent;
  let fixture: ComponentFixture<EditShopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
