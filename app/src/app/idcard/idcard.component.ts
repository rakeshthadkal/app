import { Component, OnInit } from '@angular/core';
import { Idcard } from '../idcard';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {
public idcards: Idcard [] = [];
  constructor(private _idcardservice: IdcardService) {

    this . _idcardservice.getIdCard().subscribe(
      (data : any)=>{this.idcards=data},
      (err:any)=>{alert(('internal server error'))}
    )
   }

  ngOnInit(): void {}

}
