import { Component, OnInit, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

let id = 0;

export interface CSFormGroupErrorMsg {
  [id: string]: CSInputErrorMsg;
}

export interface CSInputErrorMsg {
  required?: string;
  email?: string;
  minlength?: string;
  maxlength?: string;
  pattern?: string;
}

@Component({
  selector: 'cs-input',
  templateUrl: './csinput.component.html',
  styleUrls: ['./csinput.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsInputComponent),
      multi: true
    }
  ]
})
export class CsInputComponent implements ControlValueAccessor, OnInit {
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled: boolean;
  value: string;

  formControl: NgControl;
  inputId = id++;

  showPassword = false;
  isPassword = false;

  @Input() label: string;
  @Input() type: string;
  @Input() placeholder?: string = '';
  @Input() icon?: string;
  @Input() xClass?: string;
  @Input() errors?: CSInputErrorMsg;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.formControl = this.injector.get(NgControl);
    if (this.type === 'password') {
      this.isPassword = true;
    }
  }

  onInput(value: string): void {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  clickShowPassword() {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
