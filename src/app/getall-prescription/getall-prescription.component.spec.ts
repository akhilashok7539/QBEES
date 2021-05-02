import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallPrescriptionComponent } from './getall-prescription.component';

describe('GetallPrescriptionComponent', () => {
  let component: GetallPrescriptionComponent;
  let fixture: ComponentFixture<GetallPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
