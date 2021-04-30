import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriceUpdatorComponent } from './edit-price-updator.component';

describe('EditPriceUpdatorComponent', () => {
  let component: EditPriceUpdatorComponent;
  let fixture: ComponentFixture<EditPriceUpdatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPriceUpdatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriceUpdatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
