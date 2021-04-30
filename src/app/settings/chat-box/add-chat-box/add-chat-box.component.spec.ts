import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChatBoxComponent } from './add-chat-box.component';

describe('AddChatBoxComponent', () => {
  let component: AddChatBoxComponent;
  let fixture: ComponentFixture<AddChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
