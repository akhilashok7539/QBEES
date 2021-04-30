import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenuForApprovalComponent } from './editmenu-for-approval.component';

describe('EditmenuForApprovalComponent', () => {
  let component: EditmenuForApprovalComponent;
  let fixture: ComponentFixture<EditmenuForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmenuForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmenuForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
