import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, observable, Observable, Observer } from 'rxjs';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { Vehicle } from './vehicle';
import { VehicleComponent } from './vehicle/vehicle.component';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private _httpClient: HttpClient) {}
  getVehicles(): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
    );
  }

  getVehicle(id:string): Observable<Vehicle> {
    return this._httpClient.get<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id
    );
  }

  getPagedVehicles(pageNo: number): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }
  deleteVehicle(id: string): Observable<Vehicle> {
    return this._httpClient.delete<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }
  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this._httpClient.post<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',
      vehicle
    );
  }
}


