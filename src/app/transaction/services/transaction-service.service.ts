import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction.model';

@Injectable()
export class TransactionService {
  constructor(private httpClient: HttpClient) {}
  private getUrl(entityName: string, methodName?: string) {
    const apiUri = `${environment.api.url}/accounting`;

    if (methodName) {
      return `${apiUri}/${entityName}/${methodName}`;
    }
    return `${apiUri}/${entityName}`;
  }
  public createTransaction(model: any): Observable<any> {
    const url = this.getUrl('transactions');
    return this.httpClient.post(url, model);
  }
  public getTransactions(): Observable<Transaction[]> {
    const url = this.getUrl('transactions');
    return this.httpClient.get<Transaction[]>(url);
  }
  public getAccountById(id: string): Observable<any> {
    const url = `${this.getUrl('accounts')}/${id}`;
    return this.httpClient.get(url);
  }
}
