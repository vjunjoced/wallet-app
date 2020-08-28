import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/class/transaction';
import { ApiService } from 'src/app/core/http/api.service';
import { AppHttpResponse } from 'src/app/interface/httpResponse';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public history: Transaction[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(): void {
    this.apiService.getHistory().subscribe((response: AppHttpResponse<any[]>) => {
      this.history = response.data.map(el => new Transaction(el));
    });
  }

  getTextType(transaction: Transaction): string {
    if (transaction.type === 'send') {
      return 'Send'
    } else {
      return 'Receive'
    }
  }
}
