import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CalendarComponent ],
      providers: [{provide: NgbModal, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
