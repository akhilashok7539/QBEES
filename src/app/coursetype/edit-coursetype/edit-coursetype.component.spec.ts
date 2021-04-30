import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursetypeComponent } from './edit-coursetype.component';

describe('EditCoursetypeComponent', () => {
  let component: EditCoursetypeComponent;
  let fixture: ComponentFixture<EditCoursetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoursetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
