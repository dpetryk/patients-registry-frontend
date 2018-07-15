import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitComponent } from './visit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VisitComponent', () => {
  let component: VisitComponent;
  let fixture: ComponentFixture<VisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ VisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
