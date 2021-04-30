import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralShopMenuComponent } from './general-shop-menu.component';

describe('GeneralShopMenuComponent', () => {
  let component: GeneralShopMenuComponent;
  let fixture: ComponentFixture<GeneralShopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
