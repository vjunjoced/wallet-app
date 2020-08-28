import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CSInputErrorMsg } from 'src/app/modules/cs-form/cs-input/csinput.component';

@Injectable()
export class FormWallet {
  // controls
  name = new FormControl(null, [Validators.compose([Validators.required, Validators.maxLength(45)])]);
  product = new FormControl(null, [Validators.compose([Validators.required])]);

  // form group
  public form: FormGroup = new FormGroup({
    name: this.name,
    product: this.product
  });

  // errors
  nameError: CSInputErrorMsg;
  productError: CSInputErrorMsg;

  constructor() {
    this.nameError = {
      required: 'Campo requerido'
    };
    this.productError = {
      required: 'Campo requerido'
    };
  }
}
