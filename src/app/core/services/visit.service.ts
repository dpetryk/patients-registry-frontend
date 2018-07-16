import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visit} from '../models/visit.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private visitsRestApiUrl = '/server/visits';

  constructor(private httpClient: HttpClient) {
  }

  getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.visitsRestApiUrl);
  }

  getVisitById(id: number): Observable<Visit> {
    return this.httpClient.get<Visit>(this.visitsRestApiUrl + '/' + id);
  }

  createVisit(visit) { // poprawić!
    let body;
    console.log('im in create visit');
    body = JSON.stringify(visit);
    console.log(body);
//    this.getVisitById(17).subscribe(visit => console.log('przykladowa wizyta' + JSON.stringify(visit)));
    return this.httpClient.post<Visit>(this.visitsRestApiUrl, body, httpOptions);
    //
    // this.getVisitById(17).subscribe(visit => {
    //     body = JSON.stringify(visit);
    //     console.log(body);
    //     this.httpClient.post<Visit>(this.visitsRestApiUrl, visit, httpOptions);
    //   },
    // );


  }


}
