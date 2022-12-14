import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private _httpClient: HttpClient) { }
Login(data:any): Observable<any>{
  return this._httpClient.post<any>(
    'https://reqres.in/api/login', data
  );
}

  }

