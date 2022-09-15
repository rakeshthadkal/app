import { Component, OnInit } from '@angular/core';
import { Emp1 } from '../emp1';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public name: string = '';
  public age: number =0;
  public company: string ='';
  public package: number = 0;
  public emp: Emp1 [] =[]

  constructor() { }

  ngOnInit(): void {
  }

register(){
  this.emp.push
  {
    'name'; this.name
    'age'; this.age
    'company'; this.company
    'package' ;this.package
  }

  
}



}



