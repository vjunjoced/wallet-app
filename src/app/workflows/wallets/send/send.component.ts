import { Component, OnInit, Inject } from '@angular/core';
import { FormSend } from './form-send';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from 'src/app/class/wallet';
import { ApiService } from 'src/app/core/http/api.service';
import swal from "sweetalert2";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
  providers:[FormSend]
})
export class SendComponent implements OnInit {
  public loading = false;

  constructor(public formSend: FormSend, public dialogRef: MatDialogRef<SendComponent>, @Inject(MAT_DIALOG_DATA) public data: Wallet, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.loading = true;

    const data = {
      addressTo: this.formSend.form.value.addressTo,
      quantity: +this.formSend.form.value.quantity,
      wallet: this.data.id
    }

    this.apiService.sendCoins(data).subscribe(response => {
      this.dialogRef.close({ action: 'update' });
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      swal.fire({
        icon: 'error',
        // title: 'Oops...',
        text: error.error.codeError,
        confirmButtonText: 'Aceptar',
      });
      this.loading = false;
    });
  }

  close(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
