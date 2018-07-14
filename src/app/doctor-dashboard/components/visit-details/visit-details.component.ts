import {Component, OnInit} from '@angular/core';
import {VisitService} from '../../../core/services/visit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent implements OnInit {

  public visit;
  public visitId;

  constructor(private route: ActivatedRoute, private visitService: VisitService) {
  }

  ngOnInit() {
    this.getVisitById(this.route.snapshot.params.id);
  }

  getVisitById(id: number) {
    console.log('im in getbyid');
    this.visitService.getVisitById(id).subscribe(
      data => {
        this.visit = data;
      },
      err => console.error(err),
      () => console.log(this.visit.id)
    );
  }
}


