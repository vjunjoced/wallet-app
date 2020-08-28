import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './http/api.service';
import { UtilsService } from './utils.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ApiService,
    UtilsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
})
export class CoreModule { }
