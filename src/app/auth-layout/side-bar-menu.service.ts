import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SideBarMenuService {
  onOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  close(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('nav-shown');
    this.onClose.emit();
  }

  open(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nav-shown');
    this.onOpen.emit();
  }
}
