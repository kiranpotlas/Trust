import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriestCentersService {
  private todoUrl='https://jsonplaceholder.typicode.com/todos';
  constructor(private http : HttpClient) { }
  /**
   * name
   */
  public postTodos() {
    return this.http.get<any>(this.todoUrl) //return observable
  }
}
