import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './fees.component';
import { FeePaymentApprovalsComponent } from './fee-payment-approvals/fee-payment-approvals.component';
import { FeePaymentHistoryComponent } from './fee-payment-history/fee-payment-history.component';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';

const routes: Routes = [
  {
    path: '',
    component: FeesComponent,
    children: [
      {
        path: '',
        component: FeePaymentComponent,
      },
      {
        path: 'feeapprovals',
        component: FeePaymentApprovalsComponent,
      },
      {
        path: 'feehistory/:id',
        component: FeePaymentHistoryComponent,
      },
      {
        path: 'feehistory',
        component: FeePaymentHistoryComponent,
      },
      {
        path: 'feepayment/:id',
        component: FeePaymentComponent,
      },
      {
        path: 'feepayment',
        component: FeePaymentComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
