import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {PatientService} from './patient.service';

describe('PatientService', () => {

  let patientService: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });

    patientService = TestBed.get(PatientService);
  });

  it('should be created', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));

  it('should create service (injection alternative)', () => {
    // given

    // when
    console.log(patientService);

    // then
  });
});
