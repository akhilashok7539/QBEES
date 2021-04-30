import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTypeComponent } from './rest-type.component';

describe('RestTypeComponent', () => {
  let component: RestTypeComponent;
  let fixture: ComponentFixture<RestTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
