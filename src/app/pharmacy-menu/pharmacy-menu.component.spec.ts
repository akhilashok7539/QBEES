import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMenuComponent } from './pharmacy-menu.component';

describe('PharmacyMenuComponent', () => {
  let component: PharmacyMenuComponent;
  let fixture: ComponentFixture<PharmacyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
