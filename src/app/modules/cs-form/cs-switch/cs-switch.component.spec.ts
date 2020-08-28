import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSwitchComponent } from './cs-switch.component';

describe('CsSwitchComponent', () => {
  let component: CsSwitchComponent;
  let fixture: ComponentFixture<CsSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsSwitchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
