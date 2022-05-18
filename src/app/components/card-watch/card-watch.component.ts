import { Component, Input, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { TodoListWatchService } from 'src/app/_services/todo-list-watch.service';
import { TodoWatchCard } from 'src/app/interfaces/todo-card-watch';

@Component({
  selector: 'app-card-watch',
  templateUrl: './card-watch.component.html',
  styleUrls: ['./card-watch.component.scss'],
})
export class CardWatchComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  showEditInput = true;
  checked = false;
  completed = false;

  editDescription = new FormControl('');

  @Input() item: TodoWatchCard = {} as TodoWatchCard;

  constructor(private todoListService: TodoListWatchService) {
    library.add(this.faEdit);
    library.add(this.faTrash);
  }

  ngOnInit(): void {}

  removeItem() {
    this.todoListService.removeItemFromList(this.item);
  }

  updateItem() {
    this.showEditInput = !this.showEditInput;
    this.item.description = this.editDescription.value;
    this.item.checked = this.checked;
    this.item.completed = this.completed;

    this.todoListService.saveTodoList();
  }

  completedItem() {
    this.item.checked = !this.item.checked;
    this.item.completed = !this.item.completed;

    this.todoListService.saveTodoList();
  }
}
