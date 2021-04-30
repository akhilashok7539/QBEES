import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreOrdersComponent } from './add-pre-orders.component';

describe('AddPreOrdersComponent', () => {
  let component: AddPreOrdersComponent;
  let fixture: ComponentFixture<AddPreOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPreOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
