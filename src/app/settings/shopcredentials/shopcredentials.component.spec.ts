import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcredentialsComponent } from './shopcredentials.component';

describe('ShopcredentialsComponent', () => {
  let component: ShopcredentialsComponent;
  let fixture: ComponentFixture<ShopcredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
