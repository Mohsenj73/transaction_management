import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction-service.service';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  accountId: string = '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2';
  amount: number = 0;
  isSubmitted: boolean = false;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}
  addTransaction() {
    const model = { account_id: this.accountId, amount: this.amount };
    this.isSubmitted = true;
    this.transactionService.createTransaction(model).subscribe(
      (res) => {
        this.isSubmitted = false;
        window.confirm(`congratulate! your request done.`);
        window.location.reload();
      },

      (err) => (this.isSubmitted = false)
    );
  }
}
