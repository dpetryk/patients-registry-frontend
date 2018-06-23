import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient ) { }

  getVisits(){
    return this.http.get('/server/visits');
  }

  getVisitById(id: number){
    console.log("im in get visit by id " +id)
    return this.http.get('/server/visits/' +id);
  }

  createVisit(visit){
    let body = JSON.stringify(visit);
    return this.http.post('/server/visits', body, httpOptions);
  }
}
