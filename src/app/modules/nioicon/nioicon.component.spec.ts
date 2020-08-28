import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NioiconComponent } from './nioicon.component';

describe('NioiconComponent', () => {
  let component: NioiconComponent;
  let fixture: ComponentFixture<NioiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NioiconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NioiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
