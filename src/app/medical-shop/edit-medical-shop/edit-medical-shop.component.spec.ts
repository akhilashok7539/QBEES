import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicalShopComponent } from './edit-medical-shop.component';

describe('EditMedicalShopComponent', () => {
  let component: EditMedicalShopComponent;
  let fixture: ComponentFixture<EditMedicalShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicalShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
