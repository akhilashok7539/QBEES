import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenuForApprovalComponent } from './addmenu-for-approval.component';

describe('AddmenuForApprovalComponent', () => {
  let component: AddmenuForApprovalComponent;
  let fixture: ComponentFixture<AddmenuForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmenuForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenuForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
