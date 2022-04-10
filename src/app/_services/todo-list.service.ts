import { Injectable } from '@angular/core';
import { TodoCard } from 'src/app/interfaces/todo-card';
import { StorageService } from './storage.service';

const listStorageKey = 'key_list';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: TodoCard[] = [] as TodoCard[];

  constructor(private storageService: StorageService) {
    this.todoList = this.storageService.getDataList(listStorageKey) || [];
  }

  getTodoList() {
    return this.todoList;
  }

  saveTodoList() {
    this.storageService.setDataList(listStorageKey, this.todoList);
  }

  addItemToList(item: TodoCard) {
    this.todoList.push(item);
    this.saveTodoList();
  }

  removeItemFromList(item: TodoCard) {
    const indexItem = this.todoList.indexOf(item);
    this.todoList.splice(indexItem, 1);

    this.saveTodoList();
  }
}
