import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingAuthLayout } from './auth-layout.routing';
import { AuthLayoutComponent } from './auth-layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatButtonModule } from '@angular/material/button';
import { SideBarMenuService } from './side-bar-menu.service';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    FooterComponent,
    TopHeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    routingAuthLayout,
    BsDropdownModule.forRoot(),
    MatButtonModule,
  ],
  providers: [SideBarMenuService]
})
export class AuthLayoutModule { }
