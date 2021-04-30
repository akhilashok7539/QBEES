import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestTypeComponent } from './add-rest-type.component';

describe('AddRestTypeComponent', () => {
  let component: AddRestTypeComponent;
  let fixture: ComponentFixture<AddRestTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
