import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public demos: Demo[] = [];
  constructor(private _demoService: DemoService){
    this._demoService.getdemo().subscribe(
      (data: any) => {
        this.demos = data;
      },
      (err: any) => {
        alert ('Internal server ')
      }
    );
  }

  ngOnInit(): void {
  }

}
