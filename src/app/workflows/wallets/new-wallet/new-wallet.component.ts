import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from 'src/app/class/wallet';
import { Product } from 'src/app/class/product';
import { FormWallet } from './form-wallet';
import { ApiService } from 'src/app/core/http/api.service';
import { AppHttpResponse } from 'src/app/interface/httpResponse';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.scss'],
  providers: [FormWallet]
})
export class NewWalletComponent implements OnInit {
  public loading = false;
  public listProducts: Product[] = [];

  constructor(public formWallet: FormWallet, public dialogRef: MatDialogRef<NewWalletComponent>, @Inject(MAT_DIALOG_DATA) public data: Wallet, private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.data) {
      this.formWallet.form.patchValue({
        name: this.data.name
      });
    }

    this.init();
  }

  clickSave(): void {
    this.loading = true;
    if (this.data) {
      this.update()
    } else {
      this.save();
    }
  }

  init() {
    this.apiService.getProducts().subscribe((response: AppHttpResponse<any[]>) => {
      this.listProducts = response.data.map(el => new Product(el));

      if (this.data) {
        let p = null;
        if (this.data.product) {
          p = this.listProducts.find(el => el.id === this.data.product.id);
        }

        this.formWallet.form.patchValue({
          product: p
        });
      }
    });
  }

  save(): void {
    const data = {
      name: this.formWallet.form.value.name,
      product: this.formWallet.form.value.product.id
    };

    this.apiService.saveWallets(data).subscribe((response) => {
      this.dialogRef.close({ action: 'update' });
    });
  }

  update(): void {
    const data = {
      name: this.formWallet.form.value.name
    };

    this.apiService.updateWallets(this.data.id, data).subscribe((response) => {
      this.dialogRef.close({ action: 'update' });
    });
  }


  close(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
