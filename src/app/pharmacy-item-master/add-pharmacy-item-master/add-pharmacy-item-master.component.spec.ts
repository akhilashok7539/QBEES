import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacyItemMasterComponent } from './add-pharmacy-item-master.component';

describe('AddPharmacyItemMasterComponent', () => {
  let component: AddPharmacyItemMasterComponent;
  let fixture: ComponentFixture<AddPharmacyItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmacyItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacyItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
