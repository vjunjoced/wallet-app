import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CSInputErrorMsg } from 'src/app/modules/cs-form/cs-input/csinput.component';

@Injectable()
export class FormSend {
  // controls
  addressTo = new FormControl(null, [Validators.compose([Validators.required, Validators.maxLength(45)])]);
  quantity = new FormControl(null, [Validators.compose([Validators.required])]);

  // form group
  public form: FormGroup = new FormGroup({
    addressTo: this.addressTo,
    quantity: this.quantity
  });

  // errors
  addressToError: CSInputErrorMsg;
  quantityError: CSInputErrorMsg;

  constructor() {
    this.addressToError = {
      required: 'Campo requerido'
    };
    this.quantityError = {
      required: 'Campo requerido'
    };
  }
}
