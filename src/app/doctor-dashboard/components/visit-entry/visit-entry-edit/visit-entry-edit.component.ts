import { Component, OnInit, Input } from '@angular/core';
import { Visit } from 'src/app/core/models/visit.model';
import { VisitService } from '../../../../core/services/visit.service';
import { Patient } from 'src/app/core/models/patient.model';

@Component({
  selector: 'app-visit-entry-edit',
  templateUrl: './visit-entry-edit.component.html',
  styleUrls: ['../visit-entry.component.scss', './visit-entry-edit.component.scss']
})
export class VisitEntryEditComponent implements OnInit {

  @Input() patient: Patient;
  description;
  visit: Visit = new Visit;

  constructor(private visitService: VisitService) { }

  ngOnInit() {
  }

  onSubmit() { //add if form valid
    this.visitService.confirmNewVisitEntry(this.visit, this.patient);
  }
}
