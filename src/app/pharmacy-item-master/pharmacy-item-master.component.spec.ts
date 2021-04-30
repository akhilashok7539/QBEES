import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyItemMasterComponent } from './pharmacy-item-master.component';

describe('PharmacyItemMasterComponent', () => {
  let component: PharmacyItemMasterComponent;
  let fixture: ComponentFixture<PharmacyItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
