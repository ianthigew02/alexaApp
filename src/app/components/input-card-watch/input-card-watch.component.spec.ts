import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListWatchService } from 'src/app/_services/todo-list-watch.service';
import { mockAddTasks } from 'src/__mocks__/todoList.spec';

import { InputCardWatchComponent } from './input-card-watch.component';

describe('InputCardComponent', () => {
  let component: InputCardWatchComponent;
  let fixture: ComponentFixture<InputCardWatchComponent>;
  let todoListService: jasmine.SpyObj<TodoListWatchService>;

  beforeEach(async () => {
    todoListService = jasmine.createSpyObj('TodoListWatchService', [
      'addItemToList',
    ]);

    await TestBed.configureTestingModule({
      declarations: [InputCardWatchComponent],
      providers: [{ provide: TodoListWatchService, useValue: todoListService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardWatchComponent);
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
