import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosByUserComponent } from './todosbyuser.component';

describe('TodosByUserComponent', () => {
  let component: TodosByUserComponent;
  let fixture: ComponentFixture<TodosByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
