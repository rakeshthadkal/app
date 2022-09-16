import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:Vehicle=<Vehicle>{};

  constructor(private vehicleservice : VehicleService ) { }

  
  ngOnInit(): void {
  
  }
  getVehicle(id:string){
    this.vehicleservice.getVehicle(id).subscribe(
      (data:any)=>{
        this.vehicle=data
      }
    )
  }

}
