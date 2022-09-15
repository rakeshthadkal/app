import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from './demo';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _httpClient: HttpClient) { }
  getdemo():Observable<Demo[]>{
    return this._httpClient.get<Demo[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }
}
