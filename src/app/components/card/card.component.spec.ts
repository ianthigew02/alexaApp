import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from 'src/app/services/todo-list.service';
import { mockTodoList } from 'src/__mocks__/todoList.spec';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let todoListService: jasmine.SpyObj<TodoListService>;

  beforeEach(async () => {
    todoListService = jasmine.createSpyObj('TodoListService', [
      'removeItemFromList',
      'saveTodoList',
    ]);
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: TodoListService, useValue: todoListService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
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
