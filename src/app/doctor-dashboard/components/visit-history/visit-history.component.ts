import {Component, Input, OnInit} from '@angular/core';
import {VisitService} from "../../../core/services/visit.service";

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {

  @Input() patientId;
  visitsOfPatient;


  constructor(private visitService: VisitService) {
  }

  ngOnInit() {
    this.getVisitsOfPatient(this.patientId)
  }

  getVisitsOfPatient(id: number) {
    this.visitService.getVisitsOfPatient(id).subscribe(
      data => {
        this.visitsOfPatient = data;
        this.visitService.sortVisitsByDateDescending(this.visitsOfPatient);
      },
      err => console.log(err));
  }

}
