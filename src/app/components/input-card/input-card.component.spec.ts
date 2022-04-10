import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from 'src/app/services/todo-list.service';
import { mockAddTasks } from 'src/__mocks__/todoList.spec';

import { InputCardComponent } from './input-card.component';

describe('InputCardComponent', () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;
  let todoListService: jasmine.SpyObj<TodoListService>;

  beforeEach(async () => {
    todoListService = jasmine.createSpyObj('TodoListService', [
      'addItemToList',
    ]);

    await TestBed.configureTestingModule({
      declarations: [InputCardComponent],
      providers: [{ provide: TodoListService, useValue: todoListService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addItemToList', () => {
    todoListService.addItemToList(mockAddTasks[0]);
    component.onSubmit();
    expect(todoListService.addItemToList).toHaveBeenCalledWith(mockAddTasks[0]);
  });

  it('should show an error message when inserting an empty entry', () => {
    component.onSubmit();
    expect(component.description.value).toBe('');
    expect(component.messageError).toBe('Não é permitido campo vazio');
  });

  it('should clear the entry when the task has been submitted', () => {
    const cleanSpy = spyOn(component, 'cleanInput');
    component.cleanInput();
    expect(cleanSpy).toHaveBeenCalled();
  });
});
