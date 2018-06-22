import {Component, OnInit} from '@angular/core';
import {VisitService} from "../../services/visit.service";

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  public visits;

  constructor(private visitService: VisitService) {
  }

  ngOnInit() {
    this.getVisits()
  }

  getVisits() {
    this.visitService.getVisits().subscribe(
      data => {
        this.visits = data
      },
      err => {
        console.error(err)
      },
      () => console.log('visits loaded')
    )
  }

}
