import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './patient.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
  });

  it('should be created', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
