import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDoItem } from './../Interfaces/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const toDoItems = [
      { id: 1, description: 'Item 1', isChecked: true },
      { id: 2, description: 'Item 2', isChecked: true },
      { id: 3, description: 'Item 3', isChecked: true },
      { id: 4, description: 'Item 4', isChecked: true },
      { id: 5, description: 'Item 5', isChecked: true },
      { id: 6, description: 'Item 6', isChecked: true },
      { id: 7, description: 'Item 7', isChecked: true },
      { id: 8, description: 'Item 8', isChecked: true },
      { id: 9, description: 'Item 9', isChecked: true },
      { id: 10, description: 'Item 10', isChecked: true },
    ];
    return {toDoItems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(toDoItems: ToDoItem[]): number {
    return toDoItems.length > 0 ? Math.max(...toDoItems.map(hero => hero.id)) + 1 : 11;
  }
}