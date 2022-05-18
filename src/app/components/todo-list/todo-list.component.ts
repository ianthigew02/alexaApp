import { Component, OnInit } from '@angular/core';
import { TodoCard } from 'src/app/interfaces/todo-card';
import { TodoWatchCard } from 'src/app/interfaces/todo-card-watch';
import { TodoListWatchService } from 'src/app/_services/todo-list-watch.service';
import { TodoListService } from 'src/app/_services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  title = 'To Buy';
  titleWatch= 'To Watch'

  todoList: TodoCard[] = [] as TodoCard[];

  todoListWatch: TodoWatchCard[] = [] as TodoWatchCard[];

  constructor(private todoListService: TodoListService, private todoListWatchService: TodoListWatchService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    this.todoListWatch = this.todoListWatchService.getTodoList();
  }
}
