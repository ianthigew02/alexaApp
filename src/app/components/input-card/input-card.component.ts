import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoListService } from 'src/app/_services/todo-list.service';
@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
})
export class InputCardComponent implements OnInit {
  faPlus = faPlus;
  messageError = 'Please fill the todo';

  description = new FormControl('');

  constructor(private todoListService: TodoListService) {
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
