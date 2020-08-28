import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/class/wallet';
import { ApiService } from 'src/app/core/http/api.service';
import { AppHttpResponse } from 'src/app/interface/httpResponse';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { MatDialog } from '@angular/material/dialog';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {

  public wallets: Wallet[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getWallets();
  }

  getWallets() {
    this.apiService.getWallets().subscribe((response:AppHttpResponse<any[]>) => {
      this.wallets = response.data.map(el => new Wallet(el));
    });
  }

  add(wallet: Wallet = null): void {
    const dialogNew = this.dialog.open(NewWalletComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: wallet ,
      panelClass: 'dialog-form'
    });

    dialogNew.afterClosed().subscribe((result) => {
      if (result.action === 'update') {
        this.getWallets();
      }
    });
  }

  delete(wallet: Wallet): void {
    this.apiService.deleteWallets(wallet.id).subscribe((response: AppHttpResponse<any[]>) => {
      this.getWallets();
    });
  }

  send(wallet: Wallet): void  {
    const dialogNew = this.dialog.open(SendComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: false,
      data: wallet,
      panelClass: 'dialog-form'
    });

    dialogNew.afterClosed().subscribe((result) => {
      if (result.action === 'update') {
        this.getWallets();
      }
    });
  }

  receive(wallet: Wallet): void  {
    const dialogNew = this.dialog.open(ReceiveComponent, {
      width: '550px',
      disableClose: true,
      autoFocus: false,
      data: wallet,
      panelClass: 'dialog-form'
    });
  }
  
  view(wallet: Wallet): void {
    const dialogNew = this.dialog.open(ViewWalletComponent, {
      width: '550px',
      disableClose: true,
      autoFocus: false,
      data: wallet,
      panelClass: 'dialog-form'
    });
  }
}
