import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSublocationsComponent } from './add-sublocations.component';

describe('AddSublocationsComponent', () => {
  let component: AddSublocationsComponent;
  let fixture: ComponentFixture<AddSublocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSublocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSublocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
