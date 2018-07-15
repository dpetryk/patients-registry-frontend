import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsEditComponent } from './visit-details-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('VisitDetailsEditComponent', () => {
  let component: VisitDetailsEditComponent;
  let fixture: ComponentFixture<VisitDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
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
