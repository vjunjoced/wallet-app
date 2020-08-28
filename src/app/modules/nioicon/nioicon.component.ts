import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'cs-nioicon',
  templateUrl: './nioicon.component.html',
  styleUrls: ['./nioicon.component.scss']
})
export class CSNioiconComponent implements OnInit {
  @Input() public ic = '';

  constructor() {}

  ngOnInit(): void {}
}
