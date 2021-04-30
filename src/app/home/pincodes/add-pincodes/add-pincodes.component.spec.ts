import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPincodesComponent } from './add-pincodes.component';

describe('AddPincodesComponent', () => {
  let component: AddPincodesComponent;
  let fixture: ComponentFixture<AddPincodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPincodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPincodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
