import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Visit} from '../../../core/models/visit.model';
import {VisitService} from '../../../core/services/visit.service';

@Injectable({
  providedIn: 'root'
})
export class VisitsResolver implements Resolve<Visit[]> {

  constructor(private visitService: VisitService) {
  }

  resolve(): Observable<Visit[]> {
    return this.visitService.getVisits();
  }

}
