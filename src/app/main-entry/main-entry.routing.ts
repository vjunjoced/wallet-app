import { RouterModule, Routes } from '@angular/router';
import { MainEntryComponent } from './main-entry.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainEntryComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../auth-layout/auth-layout.module').then(
            (m) => m.AuthLayoutModule
          ),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

export const routingMainEntry = RouterModule.forChild(ROUTES);
