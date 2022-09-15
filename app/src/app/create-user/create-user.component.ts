import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl(',', [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    phone: new FormControl('',[
      Validators.required, 
      Validators.min(1000000000),
      Validators.max(9999999999)]),
    address: new FormGroup({
      state: new FormControl(),
      pin: new FormControl(),
    }),
    cards: new FormArray([]),
    PaymentType:new FormControl(),
    upiId: new FormControl(),
    CardNo: new FormControl
  });

  get cardsFormArry() {
    return this.userForm.get('cards') as FormArray;
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }
  add() {
    this.cardsFormArry.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    );
  }
}
