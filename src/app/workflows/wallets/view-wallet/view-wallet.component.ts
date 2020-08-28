import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from 'src/app/class/wallet';
import { ApiService } from 'src/app/core/http/api.service';
import { Transaction } from 'src/app/class/transaction';
import { AppHttpResponse } from 'src/app/interface/httpResponse';

@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.scss']
})
export class ViewWalletComponent implements OnInit {

  public history: Transaction[] = [];

  constructor(public dialogRef: MatDialogRef<ViewWalletComponent>, @Inject(MAT_DIALOG_DATA) public data: Wallet, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(): void {
    this.apiService.getHistory({walletId:this.data.id}).subscribe((response: AppHttpResponse<any[]>) => {
      this.history = response.data.map(el => new Transaction(el));
    });
  }

  close(): void {
    this.dialogRef.close({ action: 'cancel' });
  }

  getTextType(transaction: Transaction): string{
    if (transaction.addressFrom === this.data.address) {
      return 'Send'
    } else {
      return 'Receive'
    }
  }
}
