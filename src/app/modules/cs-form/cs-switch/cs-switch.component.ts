import { Component, OnInit, Input, Injector, forwardRef, AfterViewInit, OnChanges } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
let id = 0;

@Component({
  selector: 'cs-switch',
  templateUrl: './cs-switch.component.html',
  styleUrls: ['./cs-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSwitchComponent),
      multi: true
    }
  ]
})
export class CsSwitchComponent implements ControlValueAccessor, OnInit {
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled: boolean;
  value: any;

  switchId = id++;
  formControl: NgControl;

  @Input() label: string;
  @Input() xClass?: string;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.formControl = this.injector.get(NgControl);
  }

  onInput(value: string): void {
    this.value = value;
    this.formControl.control.setValue(value);
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    } else {
      this.value = false;
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
}
