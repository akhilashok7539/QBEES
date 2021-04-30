import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriceUpdatorComponent } from './add-price-updator.component';

describe('AddPriceUpdatorComponent', () => {
  let component: AddPriceUpdatorComponent;
  let fixture: ComponentFixture<AddPriceUpdatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPriceUpdatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPriceUpdatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
