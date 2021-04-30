import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPharmacyCategoryComponent } from './edit-pharmacy-category.component';

describe('EditPharmacyCategoryComponent', () => {
  let component: EditPharmacyCategoryComponent;
  let fixture: ComponentFixture<EditPharmacyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPharmacyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPharmacyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
