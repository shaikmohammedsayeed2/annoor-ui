import { Component, OnInit } from '@angular/core';
import { LodashService } from 'src/app/core/service/lodash/lodash.service';

@Component({
  selector: 'app-fee-payment-history',
  templateUrl: './fee-payment-history.component.html',
  styleUrls: ['./fee-payment-history.component.scss']
})
export class FeePaymentHistoryComponent implements OnInit {
  constructor( private loadash: LodashService) { }

  ngOnInit(): void {
  }
  
  goto(x:any){
    this.loadash.goto(x)
  }

}
