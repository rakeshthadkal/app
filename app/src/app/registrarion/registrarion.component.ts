import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarion',
  templateUrl: './registrarion.component.html',
  styleUrls: ['./registrarion.component.css'],
})
export class RegistrarionComponent implements OnInit {
  public name: string = '';
  public names: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  register() {
    this.names.push(this.name);
  }
  delete() {
    this.names.pop();
  }
  deleteAll() {
    this.names = [];
  }
  deleteEach(i:number) {
    this.names.splice(i,1);
  }
}
