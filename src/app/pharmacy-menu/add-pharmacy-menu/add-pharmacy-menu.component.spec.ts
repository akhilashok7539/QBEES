import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacyMenuComponent } from './add-pharmacy-menu.component';

describe('AddPharmacyMenuComponent', () => {
  let component: AddPharmacyMenuComponent;
  let fixture: ComponentFixture<AddPharmacyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmacyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
