import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visit} from '../models/visit.model';
import moment from 'moment-es6';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private visitsRestApiUrl = '/server';

  constructor(private httpClient: HttpClient) {
  }

  getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.visitsRestApiUrl + '/visits');
  }

  getVisitById(id: number): Observable<Visit> {
    return this.httpClient.get<Visit>(this.visitsRestApiUrl + '/visits' + '/' + id);
  }

  createVisit(visit) { // poprawić! po stronie BD zapisuje vizyte w innej strefie czasowej (0:00 zamiast +2h)
    let body;
    visit.visitDate.toJSON = function () {
      return moment(this).format();
    }
    body = JSON.stringify(visit);
    return this.httpClient.post<Visit>(this.visitsRestApiUrl + '/visits', body, httpOptions);
  }

  getVisitsOfPatient(id: number): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.visitsRestApiUrl + '/patients/' + id + '/visits');
  }

  sortVisitsByDateDescending(visits: Visit[]) {
    visits.sort((a, b) => {
      if (new Date(a.visitDate).getTime() > new Date(b.visitDate).getTime()) return -1;
      if (new Date(a.visitDate).getTime() < new Date(b.visitDate).getTime()) return 1;
      return 0;
    })
  }
}
