import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacyCategoryComponent } from './add-pharmacy-category.component';

describe('AddPharmacyCategoryComponent', () => {
  let component: AddPharmacyCategoryComponent;
  let fixture: ComponentFixture<AddPharmacyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmacyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
