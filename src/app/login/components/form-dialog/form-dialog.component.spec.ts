import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialog } from './form-dialog.component';

describe('FormDialog', () => {
  let component: FormDialog;
  let fixture: ComponentFixture<FormDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
