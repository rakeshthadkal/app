import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private _cartlistservce: CartlistService) {}
public cartcount: number=0;
  ngOnInit(): void {
    this._cartlistservce.getValue().subscribe(
      (data:any)=>{
        this .cartcount=data;
      }
    )
  }
add(){
  this.cartcount++;
  this._cartlistservce.setValues(this.cartcount)
}

}
