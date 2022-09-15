import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  public age: number = 22;
  public name: string = 'ram';
  public isIndia: boolean = true;
  // array interplation
  public phones: number[] = [9494, 8500, 7777];
  public course: string[] = ['Angular', 'Rect'];

  // object interpolation
  public user: User = { name: 'john', city: 'texas' };
  public student: Student = { name: 'ajay', id: 'N123', marks: 99 };

  public employee: Employee = {
    name: 'rakesh',
    id: 'cap19995',
    companyName: 'Capgamni',
    package: 1500000,
    location: 'Hyderbad',
    disgnation: 'senior',
  };

  public users: User[] = [
    { name: 'john', city: 'texas' },
    { name: 'smith', city: 'vegas' },
    { name: 'raj', city: 'delhi' },
    { name: 'shyam', city: 'hyderabad' },
  ];

  public students: Student[] = 
  [
    { name: 'ajay', id: 'N123', marks: 99 },
    { name: 'anil', id: 'N124', marks: 80 },
    { name: 'anjan', id: 'N125', marks: 70 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
