import { Component, OnInit } from '@angular/core';
import { LodashService } from 'src/app/core/service/lodash/lodash.service';

@Component({
  selector: 'app-fee-payment-approvals',
  templateUrl: './fee-payment-approvals.component.html',
  styleUrls: ['./fee-payment-approvals.component.scss']
})
export class FeePaymentApprovalsComponent implements OnInit {
  constructor( private loadash: LodashService) { }

  ngOnInit(): void {
  }
  
  goto(x:any){
    this.loadash.goto(x)
  }

}
