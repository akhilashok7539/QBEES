import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubloationsComponent } from './view-subloations.component';

describe('ViewSubloationsComponent', () => {
  let component: ViewSubloationsComponent;
  let fixture: ComponentFixture<ViewSubloationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubloationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubloationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
