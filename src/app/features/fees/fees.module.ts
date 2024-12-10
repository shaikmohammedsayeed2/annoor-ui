import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees.component';
import { FeePaymentHistoryComponent } from './fee-payment-history/fee-payment-history.component';
import { FeePaymentApprovalsComponent } from './fee-payment-approvals/fee-payment-approvals.component';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';


@NgModule({
  declarations: [
    FeesComponent,
    FeePaymentHistoryComponent,
    FeePaymentApprovalsComponent,
    FeePaymentComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule
  ]
})
export class FeesModule { }
