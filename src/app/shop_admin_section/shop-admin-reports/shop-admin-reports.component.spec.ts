import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminReportsComponent } from './shop-admin-reports.component';

describe('ShopAdminReportsComponent', () => {
  let component: ShopAdminReportsComponent;
  let fixture: ComponentFixture<ShopAdminReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAdminReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdminReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
