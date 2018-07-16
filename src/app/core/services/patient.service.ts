import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = '/server/patients/';

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get(this.apiUrl);
  }

  getPatientById(id: number) {
    return this.http.get(this.apiUrl + id);
  }

}
