import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  public vehicles: Vehicle[] = [];
  public order: string ="";
  public filterTerm: string ="";
  public column: string = "";
  
  constructor(private _vehicleService: VehicleService, private _router: Router,private _activatedRoute: ActivatedRoute) {
    
        
    
    this._vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  ngOnInit(): void {};
    
  
  page(pageNo: number){
    this._vehicleService.getPagedVehicles(pageNo).subscribe(
    (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    )
  }
 



  delete(id: string) {
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any) => {
        alert( 'deleted successfully');
        location.reload();
      },
      (err: any) => {
        alert('Internal server error');
    }
    )}

    view(id:string){
        this._router.navigateByUrl(
          '/dashboard/vehicle-details'+'/'+id
        );
    }



  }