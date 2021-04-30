import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralCategoryComponent } from './edit-general-category.component';

describe('EditGeneralCategoryComponent', () => {
  let component: EditGeneralCategoryComponent;
  let fixture: ComponentFixture<EditGeneralCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
