import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction-service.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }
  private getTransactions() {
    this.transactionService
      .getTransactions()
      .subscribe((transactions: Transaction[]) => {
        this.transactions = this.sortTransactions(transactions);
        this.getAccountBalance(this.transactions[0]);
      });
  }
  private sortTransactions(transactions: Transaction[]): Transaction[] {
    return transactions.sort((a: Transaction, b: Transaction) =>
      moment(a.created_at).isBefore(moment(b.created_at))
        ? 1
        : moment(a.created_at).isBefore(moment(b.created_at))
        ? -1
        : 0
    );
  }
  private getAccountBalance(a: Transaction) {
    this.transactionService.getAccountById(a.account_id).subscribe((res) => {
      if (a.account_id == res.account_id) {
        const data = {
          ...a,
          balance: res.balance,
        };
        this.transactions[0] = data;
      }
    });
  }
}
