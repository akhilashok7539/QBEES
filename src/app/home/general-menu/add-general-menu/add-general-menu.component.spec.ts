import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralMenuComponent } from './add-general-menu.component';

describe('AddGeneralMenuComponent', () => {
  let component: AddGeneralMenuComponent;
  let fixture: ComponentFixture<AddGeneralMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeneralMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
