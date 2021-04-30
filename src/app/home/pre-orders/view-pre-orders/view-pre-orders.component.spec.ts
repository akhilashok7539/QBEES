import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreOrdersComponent } from './view-pre-orders.component';

describe('ViewPreOrdersComponent', () => {
  let component: ViewPreOrdersComponent;
  let fixture: ComponentFixture<ViewPreOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
