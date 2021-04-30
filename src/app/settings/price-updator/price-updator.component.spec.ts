import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceUpdatorComponent } from './price-updator.component';

describe('PriceUpdatorComponent', () => {
  let component: PriceUpdatorComponent;
  let fixture: ComponentFixture<PriceUpdatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceUpdatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceUpdatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
