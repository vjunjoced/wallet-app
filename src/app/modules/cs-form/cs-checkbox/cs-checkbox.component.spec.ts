import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCheckboxComponent } from './cs-checkbox.component';

describe('CsCheckboxComponent', () => {
  let component: CsCheckboxComponent;
  let fixture: ComponentFixture<CsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
