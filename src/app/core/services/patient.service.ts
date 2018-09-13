import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from "../models/patient.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = '/server/patients/';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(this.apiUrl + id);
  }

  createPatient(patient: Patient) {
    return this.http.post<Patient>(this.apiUrl, JSON.stringify(patient), httpOptions);
  }

  editPatient(id, patient: Patient, ) {
    return this.http.put<Patient>(this.apiUrl + id, JSON.stringify(patient), httpOptions);
  }

}
