import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTopDealsComponent } from './edit-top-deals.component';

describe('EditTopDealsComponent', () => {
  let component: EditTopDealsComponent;
  let fixture: ComponentFixture<EditTopDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTopDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
