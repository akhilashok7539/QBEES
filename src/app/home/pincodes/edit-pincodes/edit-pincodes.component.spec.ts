import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPincodesComponent } from './edit-pincodes.component';

describe('EditPincodesComponent', () => {
  let component: EditPincodesComponent;
  let fixture: ComponentFixture<EditPincodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPincodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPincodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
