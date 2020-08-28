import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInputComponent } from './csinput.component';

describe('CSInputComponent', () => {
  let component: CsInputComponent;
  let fixture: ComponentFixture<CsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
