import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormStepsComponent } from './registration-form-steps.component';

describe('RegistrationFormStepsComponent', () => {
  let component: RegistrationFormStepsComponent;
  let fixture: ComponentFixture<RegistrationFormStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
