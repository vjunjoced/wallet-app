import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsComponent } from './wallets.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CSNioiconModule } from 'src/app/modules/nioicon/nioicon.module';
import { CsFormModule } from 'src/app/modules/cs-form/csform.module';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';
import { MatTooltipModule } from '@angular/material/tooltip';

const ROUTE = [
  {
    path: '',
    component: WalletsComponent,
  },
];

@NgModule({
  declarations: [WalletsComponent, NewWalletComponent, SendComponent, ReceiveComponent, ViewWalletComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    RouterModule.forChild(ROUTE),
    CSNioiconModule,
    CsFormModule,
    BsDropdownModule.forRoot(),
    MatTooltipModule
  ]
})
export class WalletsModule { }
