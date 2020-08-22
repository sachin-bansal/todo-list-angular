import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../Interfaces/ToDoItem';
import {ToDoItemService} from '../services/to-do-item.service'

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoItemList: ToDoItem[];
  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.getToDoItems();
  }

  getToDoItems(): void {
    this.toDoItemService.getToDoItems()
      .subscribe(items => this.toDoItemList = items);
  }

  onCheckboxChange(e) {  
    if (e.target.checked) {
      
    } else {
       
    }
  }

  onDelete(toDoItem: ToDoItem){
    debugger;
  }

}
