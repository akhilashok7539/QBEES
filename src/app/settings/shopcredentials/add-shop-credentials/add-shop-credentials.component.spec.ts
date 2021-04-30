import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopCredentialsComponent } from './add-shop-credentials.component';

describe('AddShopCredentialsComponent', () => {
  let component: AddShopCredentialsComponent;
  let fixture: ComponentFixture<AddShopCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
