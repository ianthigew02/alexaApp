import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListWatchService } from 'src/app/_services/todo-list-watch.service';
import { mockTodoList } from 'src/__mocks__/todoList.spec';
import { CardWatchComponent } from './card-watch.component';

describe('CardComponent', () => {
  let component: CardWatchComponent;
  let fixture: ComponentFixture<CardWatchComponent>;
  let todoListService: jasmine.SpyObj<TodoListWatchService>;

  beforeEach(async () => {
    todoListService = jasmine.createSpyObj('TodoListWatchService', [
      'removeItemFromList',
      'saveTodoList',
    ]);
    await TestBed.configureTestingModule({
      declarations: [CardWatchComponent],
      providers: [{ provide: TodoListWatchService, useValue: todoListService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeItemFromList', () => {
    todoListService.removeItemFromList(mockTodoList[0]);
    component.removeItem();
    expect(todoListService.removeItemFromList).toHaveBeenCalledWith(
      mockTodoList[0]
    );
  });

  it('should call saveTodoList', () => {
    todoListService.saveTodoList();
    component.updateItem();
    expect(todoListService.saveTodoList).toHaveBeenCalled();
  });

  it('should issue checked when clicked on checkbox ', () => {
    const checkbox = fixture.nativeElement.querySelector('.checkbox');

    checkbox.click();

    fixture.detectChanges();

    expect(component.item.checked).toBeTruthy();
  });

  it('should issue edit when clicked on edit button', () => {
    const button = fixture.nativeElement.querySelector('.button--edit');

    button.click();

    fixture.detectChanges();

    component.showEditInput = false;

    expect(component.showEditInput).toBe(false);
  });

  it('should issue delete when clicked on the delete button ', () => {
    const button = fixture.nativeElement.querySelector('.button--delete');

    button.click();

    fixture.detectChanges();

    expect(todoListService.removeItemFromList).toHaveBeenCalled();
  });
});
