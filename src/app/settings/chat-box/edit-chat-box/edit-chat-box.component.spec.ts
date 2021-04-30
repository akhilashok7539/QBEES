import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChatBoxComponent } from './edit-chat-box.component';

describe('EditChatBoxComponent', () => {
  let component: EditChatBoxComponent;
  let fixture: ComponentFixture<EditChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
