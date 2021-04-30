import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharamcyCategoryComponent } from './pharamcy-category.component';

describe('PharamcyCategoryComponent', () => {
  let component: PharamcyCategoryComponent;
  let fixture: ComponentFixture<PharamcyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharamcyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharamcyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
