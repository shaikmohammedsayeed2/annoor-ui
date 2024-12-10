import { Component, OnInit } from '@angular/core';
import { LodashService } from 'src/app/core/service/lodash/lodash.service';

@Component({
  selector: 'app-fee-payment',
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.scss']
})
export class FeePaymentComponent implements OnInit {

  constructor( private loadash: LodashService) { }

  ngOnInit(): void {
  }
  
  goto(x:any){
    this.loadash.goto(x)
  }

}
