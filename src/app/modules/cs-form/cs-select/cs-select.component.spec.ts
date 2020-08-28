import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSelectComponent } from './cs-select.component';

describe('CsSelectComponent', () => {
  let component: CsSelectComponent;
  let fixture: ComponentFixture<CsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
