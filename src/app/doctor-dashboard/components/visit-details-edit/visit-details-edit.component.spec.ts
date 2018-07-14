import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsEditComponent } from './visit-details-edit.component';

describe('VisitDetailsEditComponent', () => {
  let component: VisitDetailsEditComponent;
  let fixture: ComponentFixture<VisitDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
