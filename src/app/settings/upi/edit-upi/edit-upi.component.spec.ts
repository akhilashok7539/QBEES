import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpiComponent } from './edit-upi.component';

describe('EditUpiComponent', () => {
  let component: EditUpiComponent;
  let fixture: ComponentFixture<EditUpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
