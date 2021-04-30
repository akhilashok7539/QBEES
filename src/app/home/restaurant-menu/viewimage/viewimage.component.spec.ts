import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimageComponent } from './viewimage.component';

describe('ViewimageComponent', () => {
  let component: ViewimageComponent;
  let fixture: ComponentFixture<ViewimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
