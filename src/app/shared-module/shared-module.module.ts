import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  entryComponents: [],
  exports: [
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModuleModule {}
