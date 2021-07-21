import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

export interface Album {
  userId: number,
  id: number,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private base_path: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

public getListOfAlbums(): Observable<Album[]>{
    console.log(this.base_path);
    return this.http.get<Album[]>(
      `${this.base_path}`);
  }


  public getListOfAlbumsById(id): Observable<Album[]>{
    console.log(this.base_path + id);
    return this.http.get<Album[]>(
      `${this.base_path}/${id}`);
  }


}
