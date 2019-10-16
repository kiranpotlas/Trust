import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpiritualCentersService {
  private albumUrl='https://jsonplaceholder.typicode.com/albums'
  constructor(private http : HttpClient) { }
  /**
   * getAlbums
   */
  public getAlbums() {
   return this.http.get<any>(this.albumUrl); //return observable
  }
}
