import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoListWatchService } from 'src/app/_services/todo-list-watch.service';
@Component({
  selector: 'app-input-card-watch',
  templateUrl: './input-card-watch.component.html',
  styleUrls: ['./input-card-watch.component.scss'],
})
export class InputCardWatchComponent implements OnInit {
  faPlus = faPlus;
  messageError = 'Please fill the todo';

  description = new FormControl('');

  constructor(private todoListService: TodoListWatchService) {
    library.add(this.faPlus);
  }

  ngOnInit(): void {}

  cleanInput() {
    this.description.setValue('');
  }

  onSubmit() {
    if (this.description.value === '') {
      return alert(this.messageError);
    }

    this.todoListService.addItemToList({ description: this.description.value });

    this.cleanInput();
  }
}
