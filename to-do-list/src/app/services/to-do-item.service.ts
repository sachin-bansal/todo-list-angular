import { Injectable } from '@angular/core';
import { ToDoItem } from '../Interfaces/ToDoItem';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ToDoItemService {

  private itemsUrl = 'api/toDoItems';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getToDoItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(this.itemsUrl)
    .pipe(
      tap(_ => console.log('fetched to-do items')),
      catchError(this.handleError<ToDoItem[]>('getToDoItems', []))
    );
  }

  getToDoItem(id: number): Observable<ToDoItem> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<ToDoItem>(url).pipe(
      tap(_ => console.log(`fetched to-do item id=${id}`)),
      catchError(this.handleError<ToDoItem>(`getToDoItem id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
updateToDoItem(todoItem: ToDoItem): Observable<any> {
  return this.http.put(this.itemsUrl, todoItem, this.httpOptions).pipe(
    tap(_ => console.log(`updated todo item id=${todoItem.id}`)),
    catchError(this.handleError<any>('updateToDoItem'))
  );
}

addToDoItem(toDoItem: ToDoItem): Observable<ToDoItem> {
  return this.http.post<ToDoItem>(this.itemsUrl, toDoItem, this.httpOptions).pipe(
    tap((newItem: ToDoItem) => console.log(`added to-do item w/ id=${newItem.id}`)),
    catchError(this.handleError<ToDoItem>('addToDoItem'))
  );
}

deleteToDoItem(toDoItem: ToDoItem | number): Observable<ToDoItem> {
  const id = typeof toDoItem === 'number' ? toDoItem : toDoItem.id;
  const url = `${this.itemsUrl}/${id}`;

  return this.http.delete<ToDoItem>(url, this.httpOptions).pipe(
    tap(_ => console.log(`deleted to-do item id=${id}`)),
    catchError(this.handleError<ToDoItem>('deleteToDoItem'))
  );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
