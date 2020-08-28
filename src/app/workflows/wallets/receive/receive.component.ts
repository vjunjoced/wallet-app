import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from 'src/app/class/wallet';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReceiveComponent>, @Inject(MAT_DIALOG_DATA) public data: Wallet) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}
