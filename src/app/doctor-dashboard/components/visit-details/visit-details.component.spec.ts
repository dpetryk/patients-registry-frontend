import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsComponent } from './visit-details.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {VisitService} from "../../../core/services/visit.service";
import {of} from 'rxjs';

describe('VisitDetailsComponent', () => {
  let component: VisitDetailsComponent;
  let fixture: ComponentFixture<VisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ VisitDetailsComponent ],
      providers: [
        {provide: VisitService, useValue: {
          getVisitById: jasmine.createSpy('getVisitsSpy').and.returnValue(
            of({patient: {address: {}}})
          )
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
