import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Typi } from './typi';

@Injectable({
  providedIn: 'root'
})
export class TypiService {

  constructor(private _httpClient: HttpClient ) { }

gettypi(): Observable<Typi[]>
{
  return this._httpClient.get<Typi[]>('https://jsonplaceholder.typicode.com/posts')
}
}
