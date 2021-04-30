import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopCredentialsComponent } from './edit-shop-credentials.component';

describe('EditShopCredentialsComponent', () => {
  let component: EditShopCredentialsComponent;
  let fixture: ComponentFixture<EditShopCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
