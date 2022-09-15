import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public length: number = 0;
  public breath: number = 0;
  public result: number = 0;
  area(){
    this.result=this.length * this.breath;
  }
  peremeter(){
    this.result = 2* (this.length+this.breath);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
