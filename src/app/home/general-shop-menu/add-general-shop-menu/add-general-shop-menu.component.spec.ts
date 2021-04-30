import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralShopMenuComponent } from './add-general-shop-menu.component';

describe('AddGeneralShopMenuComponent', () => {
  let component: AddGeneralShopMenuComponent;
  let fixture: ComponentFixture<AddGeneralShopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeneralShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneralShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
