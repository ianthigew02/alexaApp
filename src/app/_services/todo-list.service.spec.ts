import { TestBed } from '@angular/core/testing';
import {
  mockAddTasks,
  MockTasks,
  mockTodoList,
} from 'src/__mocks__/todoList.spec';
import { StorageService } from './storage.service';

import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;
  let storageService: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    storageService = jasmine.createSpyObj('StorageService', [
      'getDataList',
      'setDataList',
    ]);

    TestBed.configureTestingModule({
      providers: [
        TodoListService,
        { provide: StorageService, useValue: storageService },
      ],
    });
    service = TestBed.inject(TodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTodoList', () => {
    storageService.getDataList.and.returnValue(mockTodoList);
    service.getTodoList();
    expect(storageService.getDataList).toHaveBeenCalledWith('key_list');
  });

  it('should call addItemToList', () => {
    storageService.setDataList.and.returnValue();
    service.addItemToList(mockAddTasks[0]);
    expect(storageService.setDataList).toHaveBeenCalledWith(
      'key_list',
      mockAddTasks
    );
  });

  it('should call removeItemFromList', () => {
    storageService.setDataList.and.returnValue();
    service.removeItemFromList(MockTasks[0]);
    expect(storageService.setDataList).toHaveBeenCalledWith(
      'key_list',
      mockTodoList.slice(2)
    );
  });
});
