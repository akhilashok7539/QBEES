import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestTypeComponent } from './edit-rest-type.component';

describe('EditRestTypeComponent', () => {
  let component: EditRestTypeComponent;
  let fixture: ComponentFixture<EditRestTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
