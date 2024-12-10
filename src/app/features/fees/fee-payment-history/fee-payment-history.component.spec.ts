import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePaymentHistoryComponent } from './fee-payment-history.component';

describe('FeePaymentHistoryComponent', () => {
  let component: FeePaymentHistoryComponent;
  let fixture: ComponentFixture<FeePaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeePaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeePaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
