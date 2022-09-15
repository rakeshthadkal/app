import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent implements OnInit {

  public amount: number = 0;
  constructor(private _hdfcService: HdfcService) { }

  ngOnInit(): void {
  }
withdrew(){
  this._hdfcService.withdraw(this.amount);
}
  deposit(){
    this._hdfcService.deposit(this.amount);
  }
  withdraw(){
    this._hdfcService.withdraw(this.amount);
  }
  showbalance(){
    alert(this._hdfcService.getbalance())
  }

}
