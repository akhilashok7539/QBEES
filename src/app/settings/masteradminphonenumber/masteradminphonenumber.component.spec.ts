import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteradminphonenumberComponent } from './masteradminphonenumber.component';

describe('MasteradminphonenumberComponent', () => {
  let component: MasteradminphonenumberComponent;
  let fixture: ComponentFixture<MasteradminphonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteradminphonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteradminphonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
