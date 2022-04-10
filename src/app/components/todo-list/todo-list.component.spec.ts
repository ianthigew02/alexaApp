import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from 'src/app/services/todo-list.service';
import { mockTodoList } from 'src/__mocks__/todoList.spec';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoListService: jasmine.SpyObj<TodoListService>;

  beforeEach(async () => {
    todoListService = jasmine.createSpyObj('TodoListService', ['getTodoList']);

    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodoListService, useValue: todoListService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTodoList', () => {
    todoListService.getTodoList.and.returnValue(mockTodoList);
    component.ngOnInit();
    expect(todoListService.getTodoList).toHaveBeenCalledWith();
  });

  it(`should render title 'CheckList'`, () => {
    const title = 'CheckList';
    expect(component.title).toBe(title);
  });

  it(`should have an '<app-input-card>' component`, () => {
    const fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-input-card')).toBeDefined();
  });
});
