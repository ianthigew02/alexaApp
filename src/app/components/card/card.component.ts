import { Component, Input, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoCard } from 'src/app/interfaces/todo-card';
import { FormControl } from '@angular/forms';
import { TodoListService } from 'src/app/_services/todo-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  showEditInput = true;
  checked = false;
  completed = false;

  editDescription = new FormControl('');

  @Input() item: TodoCard = {} as TodoCard;

  constructor(private todoListService: TodoListService) {
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
