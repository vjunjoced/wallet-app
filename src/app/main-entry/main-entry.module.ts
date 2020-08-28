import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEntryComponent } from './main-entry.component';
import { routingMainEntry } from './main-entry.routing';

@NgModule({
  declarations: [MainEntryComponent],
  imports: [CommonModule, routingMainEntry],
})
export class MainEntryModule {}
