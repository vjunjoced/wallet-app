import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, Injector, forwardRef, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

let selectId = 0;

@Component({
  selector: 'cs-select',
  templateUrl: './cs-select.component.html',
  styleUrls: ['./cs-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSelectComponent),
      multi: true
    }
  ]
})
export class CsSelectComponent implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled: boolean;
  value: any;
  formControl: NgControl;

  @ViewChild('btnTgMenu', { static: false }) btnTgMenu;

  @Input() templateSelect;
  @Input() templateOption;

  @Input() formatSelect;
  @Input() formatOption;

  @Input() isMultiple = false;
  @Input() enableSearch = false;

  @Input() xClass: string;
  @Input() placeholder: string;
  @Input() label = '';
  @Input() options: [] = [];
  @Input() initValue = null;
  @Input() displayField = null;
  @Input() showButtonClear = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  myId = selectId++;
  htmlId = `cs-select-${this.myId}`;
  isOpen = false;
  selectIsUp = false;
  inputSearchValue = null;

  public currentOption = null;
  public listCurrentOptions: any[] = [];

  isMaxItems = false;

  private filteredOptions: any[] = [];
  private s1: Subscription;

  constructor(private injector: Injector) {}

  ngOnDestroy(): void {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options.currentValue) {
      this.initControl();
    }
  }

  ngOnInit(): void {
    this.formControl = this.injector.get(NgControl);
    this.initControl();

    setTimeout(() => {
      this.s1 = this.formControl.control.valueChanges.subscribe((value) => {
        if (this.isMultiple) {
          this.listCurrentOptions = value;
        } else {
          this.currentOption = value;
        }
      });
    }, 1);
  }

  ngDoCheck(): void {
    if (this.btnTgMenu) {
      const elems: HTMLElement = document.getElementsByClassName(this.htmlId).item(0) as HTMLElement;

      if (elems) {
        elems.style.width = this.btnTgMenu.nativeElement.offsetWidth + 'px';
        elems.style.maxWidth = this.btnTgMenu.nativeElement.offsetWidth + 'px';

        if (elems.style.transformOrigin === 'left bottom') {
          this.selectIsUp = true;
        } else {
          this.selectIsUp = false;
        }
      }

      this.updateIsMaxItems();
    }
  }

  private initControl() {
    setTimeout(() => {
      if (this.formControl.value instanceof Array) {
        this.listCurrentOptions = this.formControl.value;
      } else {
        this.currentOption = this.formControl.value;
      }

      this.onInput(this.formControl.value);
    }, 1);
  }

  private updateIsMaxItems() {
    // check max items
    if (this.isMultiple && this.listCurrentOptions.length > 0) {
      let totalWidth = 0;

      for (let i = 0; i < this.btnTgMenu.nativeElement.children.length; i++) {
        const el = this.btnTgMenu.nativeElement.children[i];

        if (el.classList.contains('label-selected')) {
          totalWidth += el.offsetWidth + 4;
        }
      }

      if (totalWidth > this.btnTgMenu.nativeElement.offsetWidth - 58) {
        this.isMaxItems = true;
      } else {
        this.isMaxItems = false;
      }
    } else {
      this.isMaxItems = false;
    }
  }

  delete(option?): void {
    if (!this.isMultiple) {
      this.currentOption = null;
      this.onInput(this.currentOption);
    } else {
      this.listCurrentOptions = this.listCurrentOptions.filter((el) => {
        return el !== option;
      });

      setTimeout(() => {
        this.updateIsMaxItems();
      }, 1);

      this.onInput(this.listCurrentOptions);
    }
  }

  checkEmptyList(): boolean {
    if (this.options.length === 0) {
      return true;
    }

    if (this.isMultiple) {
      return this.options.length == this.listCurrentOptions.length;
    }

    return false;
  }

  select(option: any): void {
    this.inputSearchValue = null;

    if (!this.isMultiple) {
      if (option == this.currentOption) {
        return;
      }

      this.currentOption = option;
      this.onInput(this.currentOption);
    } else {
      this.listCurrentOptions.push(option);
      this.onInput(this.listCurrentOptions);
    }
  }

  get checkIsSelected(): boolean {
    if (this.isMultiple) {
      return this.listCurrentOptions.length > 0;
    } else {
      return this.currentOption || false;
    }
  }

  checkOptionIsSelected(option): boolean {
    if (!this.isMultiple) {
      return false;
    }

    return this.listCurrentOptions.find((el) => {
      return el == option;
    });
  }

  checkFilteredOption(option): boolean {
    if (!this.enableSearch) {
      return true;
    }

    if (!this.inputSearchValue) {
      return true;
    }

    if (this.isMultiple) {
      return false;
    } else {
      return this.filteredOptions.find((el) => el === option);
    }
  }

  selectOpened(): void {
    this.isOpen = true;
  }

  selectClosed(): void {
    this.isOpen = false;
  }

  // Value Accessor fn
  onInput(value: any): void {
    const dif = value != this.value;
    this.value = value;
    this.formControl.control.setValue(value);
    this.onTouch();
    this.onChange(this.value);

    if (dif) {
      this.change.emit(value);
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    } else {
      this.value = null;
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

  filterOptions(value: string): void {
    if (this.displayField) {
      this.filteredOptions = this.options.filter((el: any) => {
        return el[this.displayField].toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    } else {
      this.filteredOptions = this.options.filter((el: any) => {
        return el.toLowerCase().indexOf(value.toLowerCase());
      });
    }
  }
}
