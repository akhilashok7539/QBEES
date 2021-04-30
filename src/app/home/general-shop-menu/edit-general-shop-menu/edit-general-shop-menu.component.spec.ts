import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralShopMenuComponent } from './edit-general-shop-menu.component';

describe('EditGeneralShopMenuComponent', () => {
  let component: EditGeneralShopMenuComponent;
  let fixture: ComponentFixture<EditGeneralShopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
