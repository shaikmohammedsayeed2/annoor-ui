import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePaymentApprovalsComponent } from './fee-payment-approvals.component';

describe('FeePaymentApprovalsComponent', () => {
  let component: FeePaymentApprovalsComponent;
  let fixture: ComponentFixture<FeePaymentApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeePaymentApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeePaymentApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
