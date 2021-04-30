import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralCategoryComponent } from './add-general-category.component';

describe('AddGeneralCategoryComponent', () => {
  let component: AddGeneralCategoryComponent;
  let fixture: ComponentFixture<AddGeneralCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeneralCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneralCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
