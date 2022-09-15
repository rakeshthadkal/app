import { Component, OnInit } from '@angular/core';
import { Typi } from '../typi';
import { TypiService } from '../typi.service';

@Component({
  selector: 'app-typi',
  templateUrl: './typi.component.html',
  styleUrls: ['./typi.component.css']
})
export class TypiComponent implements OnInit {
public tipis: Typi [] = [];
  constructor(private _typiservice: TypiService) {
    this._typiservice.gettypi().subscribe(
      (data:any)=>{
        this.tipis=data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
   }

  ngOnInit(): void {
  }


}
