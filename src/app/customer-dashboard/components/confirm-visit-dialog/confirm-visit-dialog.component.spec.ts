import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVisitDialogComponent } from './confirm-visit-dialog.component';

describe('ConfirmVisitDialogComponent', () => {
  let component: ConfirmVisitDialogComponent;
  let fixture: ComponentFixture<ConfirmVisitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmVisitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmVisitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
