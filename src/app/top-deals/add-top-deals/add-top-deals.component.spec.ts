import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopDealsComponent } from './add-top-deals.component';

describe('AddTopDealsComponent', () => {
  let component: AddTopDealsComponent;
  let fixture: ComponentFixture<AddTopDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTopDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
