import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopMenuComponent } from './add-shop-menu.component';

describe('AddShopMenuComponent', () => {
  let component: AddShopMenuComponent;
  let fixture: ComponentFixture<AddShopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
