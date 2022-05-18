import { Injectable } from '@angular/core';
import { TodoWatchCard } from '../interfaces/todo-card-watch';
import { StorageWatchService } from './storage-to-watch.service';

const listStorageKey = 'key_list_watch';

@Injectable({
  providedIn: 'root',
})
export class TodoListWatchService {
  todoList: TodoWatchCard[] = [] as TodoWatchCard[];

  constructor(private storageService: StorageWatchService) {
    this.todoList = this.storageService.getDataList(listStorageKey) || [];
  }

  getTodoList() {
    return this.todoList;
  }

  saveTodoList() {
    this.storageService.setDataList(listStorageKey, this.todoList);
  }

  addItemToList(item: TodoWatchCard) {
    this.todoList.push(item);
    this.saveTodoList();
  }

  removeItemFromList(item: TodoWatchCard) {
    const indexItem = this.todoList.indexOf(item);
    this.todoList.splice(indexItem, 1);

    this.saveTodoList();
  }
}
