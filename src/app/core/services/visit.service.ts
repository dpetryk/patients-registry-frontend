import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Visit } from '../models/visit.model';
import { PatientService } from './patient.service';
import { Patient } from '../models/patient.model';
import moment from 'moment-es6';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private RestApiUrl = '/server';

  constructor(private httpClient: HttpClient, private patientService: PatientService) {
  }

  getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.RestApiUrl + '/visits');

  }

  getVisitById(id: number): Observable<Visit> {
    return this.httpClient.get<Visit>(this.RestApiUrl + '/visits' + '/' + id);
  }

  createVisit(visit) { // workaround with timezone. backend adds 2 hours before saving to DB
    return this.httpClient.post<Visit>(this.RestApiUrl + '/visits', JSON.stringify(visit), httpOptions);
  }

  getVisitsOfPatient(id: number): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.RestApiUrl + '/patients/' + id + '/visits');
  }

  sortVisitsByDateDescending(visits: Visit[]) {
    visits.sort((a, b) => {
      if (new Date(a.visitDate).getTime() > new Date(b.visitDate).getTime()) return -1;
      if (new Date(a.visitDate).getTime() < new Date(b.visitDate).getTime()) return 1;
      return 0;
    })
  }

  confirmNewVisitEntry(visit: Visit, patient: Patient) {
    patient.id = undefined;
    patient.address.id = undefined;

    visit.completed = true;
    visit.visitDate = new Date();
    visit.patient = patient;
    // console.log(visit);
    this.createVisit(visit).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error));;
  }

}
