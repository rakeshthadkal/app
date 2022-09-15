import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items: Item [] = [] ;
  constructor(private _itemservice: ItemService) {
    this ._itemservice.getitem().subscribe(
      (data:any)=>{this.items=data},
      (err:any)=>{alert('internal server error')}
    )
   }

  ngOnInit(): void {
  }

}
 