import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodoComponent implements OnInit {
  public todoss: Todos[] = [];
  constructor(private _todosservice: TodosService) {
    this._todosservice.gettodos().subscribe(
      (data: any) => {
        this.todoss = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
}