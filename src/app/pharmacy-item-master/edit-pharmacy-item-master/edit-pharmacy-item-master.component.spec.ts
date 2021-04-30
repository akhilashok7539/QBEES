import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPharmacyItemMasterComponent } from './edit-pharmacy-item-master.component';

describe('EditPharmacyItemMasterComponent', () => {
  let component: EditPharmacyItemMasterComponent;
  let fixture: ComponentFixture<EditPharmacyItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPharmacyItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPharmacyItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
