import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuApprovalComponent } from './menu-approval.component';

describe('MenuApprovalComponent', () => {
  let component: MenuApprovalComponent;
  let fixture: ComponentFixture<MenuApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
