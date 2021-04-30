import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralMenuComponent } from './edit-general-menu.component';

describe('EditGeneralMenuComponent', () => {
  let component: EditGeneralMenuComponent;
  let fixture: ComponentFixture<EditGeneralMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
