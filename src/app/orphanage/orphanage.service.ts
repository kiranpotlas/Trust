import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrphanageService {
   private postUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  /**
   * postUsers
   */
  public postUsers() {
    return this.http.get<any>(this.postUrl) //return observable
  }
}
