import { getLocaleExtraDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _httpClient: HttpClient) { }
gettodos():Observable<Todos[]>{
return this._httpClient.get<Todos[]>(
  'https://jsonplaceholder.typicode.com/todos'
);
}
}