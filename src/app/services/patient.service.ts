import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public getPatients() {
    return this.http.get('/server/patients');
  }

  getPatientById(id: number) {
    return this.http.get('/server/patients/' + id);
  }

}
