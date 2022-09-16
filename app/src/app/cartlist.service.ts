import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartlistService {


  public cartCount: BehaviorSubject<any>=new BehaviorSubject(0);
  constructor() { }
setValues(value:any){
  this.cartCount.next(value);
}

getValue(){
  return this.cartCount.asObservable();
}


}
