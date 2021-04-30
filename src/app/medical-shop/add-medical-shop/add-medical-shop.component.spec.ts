import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalShopComponent } from './add-medical-shop.component';

describe('AddMedicalShopComponent', () => {
  let component: AddMedicalShopComponent;
  let fixture: ComponentFixture<AddMedicalShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicalShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
