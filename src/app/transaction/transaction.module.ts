import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { RouterModule } from '@angular/router';
import { transactionRoutes } from './transaction.routing';
import { FormsModule } from '@angular/forms';
import { TransactionService } from './services/transaction-service.service';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionListComponent,
    TransactionFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(transactionRoutes),
  ],
  providers: [TransactionService],
})
export class TransactionModule {}
