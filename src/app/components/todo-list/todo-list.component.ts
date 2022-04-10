import { Component, OnInit } from '@angular/core';
import { TodoCard } from 'src/app/interfaces/todo-card';
import { TodoListService } from 'src/app/_services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  title = 'My To-Do List';

  todoList: TodoCard[] = [] as TodoCard[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
}
