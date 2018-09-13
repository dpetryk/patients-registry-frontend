import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitEntryEditComponent } from './visit-entry-edit.component';

describe('VisitEntryEditComponent', () => {
  let component: VisitEntryEditComponent;
  let fixture: ComponentFixture<VisitEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitEntryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
