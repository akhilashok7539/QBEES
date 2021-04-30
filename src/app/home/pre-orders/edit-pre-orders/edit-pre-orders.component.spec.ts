import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreOrdersComponent } from './edit-pre-orders.component';

describe('EditPreOrdersComponent', () => {
  let component: EditPreOrdersComponent;
  let fixture: ComponentFixture<EditPreOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPreOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
