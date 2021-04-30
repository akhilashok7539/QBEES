import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantMenuComponent } from './edit-restaurant-menu.component';

describe('EditRestaurantMenuComponent', () => {
  let component: EditRestaurantMenuComponent;
  let fixture: ComponentFixture<EditRestaurantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestaurantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
