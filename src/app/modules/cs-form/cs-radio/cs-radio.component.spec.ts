import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsRadioComponent } from './cs-radio.component';

describe('CsRadioComponent', () => {
  let component: CsRadioComponent;
  let fixture: ComponentFixture<CsRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsRadioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
