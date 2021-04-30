import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursetypeComponent } from './add-coursetype.component';

describe('AddCoursetypeComponent', () => {
  let component: AddCoursetypeComponent;
  let fixture: ComponentFixture<AddCoursetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
