import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Visit} from "../models/visit.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  getVisits(): Observable<Visit[]>{
    return <Observable<Visit[]>>this.http.get('/server/visits');
  }

  getVisitById(id: number){
    return this.http.get('/server/visits/' +id);
  }

  createVisit(visit){ // poprawić!
    console.log("im in create visit");
    let body = JSON.stringify(visit);
    console.log(body);
    return this.http.post('/server/visits', body, httpOptions);
  }



}
