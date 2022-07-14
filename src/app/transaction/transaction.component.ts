import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transactions',
  template: `
    <div class="flex w-screen h-screen module-container transaction-module">
      <div class="transaction-form">
        <transaction-form></transaction-form>
      </div>
      <div class="transaction-list">
        <transaction-list></transaction-list>
      </div>
    </div>
  `,
})
export class TransactionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
