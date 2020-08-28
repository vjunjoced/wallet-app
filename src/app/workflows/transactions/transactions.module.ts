import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';

const ROUTE = [
  {
    path: '',
    component: TransactionsComponent,
  },
];

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(ROUTE)
  ]
})
export class TransactionsModule { }
