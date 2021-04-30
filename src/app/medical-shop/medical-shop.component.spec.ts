import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalShopComponent } from './medical-shop.component';

describe('MedicalShopComponent', () => {
  let component: MedicalShopComponent;
  let fixture: ComponentFixture<MedicalShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
