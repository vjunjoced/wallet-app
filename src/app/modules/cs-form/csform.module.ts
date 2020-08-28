import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsInputComponent } from './cs-input/csinput.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CSNioiconModule } from '../nioicon/nioicon.module';
import { CsSwitchComponent } from './cs-switch/cs-switch.component';
import { CsCheckboxComponent } from './cs-checkbox/cs-checkbox.component';
import { CsSelectComponent } from './cs-select/cs-select.component';
import { MatMenuModule } from '@angular/material/menu';
import { CsRadioComponent } from './cs-radio/cs-radio.component';

@NgModule({
  declarations: [CsInputComponent, CsSwitchComponent, CsCheckboxComponent, CsSelectComponent, CsRadioComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CSNioiconModule, MatMenuModule],
  exports: [CsInputComponent, CsSwitchComponent, CsCheckboxComponent, CsSelectComponent, ReactiveFormsModule, FormsModule, CsRadioComponent]
})
export class CsFormModule {}
