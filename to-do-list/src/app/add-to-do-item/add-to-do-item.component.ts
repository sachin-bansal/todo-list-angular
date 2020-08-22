import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../Interfaces/ToDoItem';

@Component({
  selector: 'add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.scss']
})
export class AddToDoItemComponent implements OnInit {
  toDoItem: ToDoItem = {
    id: 1,
    description: '',
    isChecked: false
  };


  constructor() { }

  ngOnInit(): void {
  }

}
