import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'wallets'
      },
      {
        path: 'wallets',
        loadChildren: () =>
          import('../workflows/wallets/wallets.module').then(
            (m) => m.WalletsModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../workflows/transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
    ],
  },
];

export const routingAuthLayout = RouterModule.forChild(ROUTES);
