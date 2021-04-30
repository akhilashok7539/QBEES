import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPharmacyMenuComponent } from './edit-pharmacy-menu.component';

describe('EditPharmacyMenuComponent', () => {
  let component: EditPharmacyMenuComponent;
  let fixture: ComponentFixture<EditPharmacyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPharmacyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPharmacyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
