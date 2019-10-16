import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OldageHomeService {
  private userUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }
  /**
   * getUsers
   */
  public getUsers() {
  return this.http.get<any>(this.userUrl) //return observable
  }
}
