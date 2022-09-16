import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { CartlistComponent } from '../cartlist/cartlist.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public cartcount: number = 0;
  constructor(private _cartlistservce: CartlistService) {}

  ngOnInit(): void {
    this._cartlistservce.getValue().subscribe((data: any) => {
      this.cartcount = data;
    });
  }
}
