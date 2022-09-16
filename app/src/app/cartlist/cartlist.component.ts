import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
})
export class CartlistComponent implements OnInit {
  public cartcount: number=0;
  constructor(private _cartlistservce: CartlistService) {}

  ngOnInit(): void {
    this._cartlistservce.getValue().subscribe((data: any) => {
      this.cartcount = data;
    });
  }
  
}
