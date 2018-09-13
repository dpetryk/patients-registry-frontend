import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visit-entry',
  templateUrl: './visit-entry.component.html',
  styleUrls: ['./visit-entry.component.scss']
})
export class VisitEntryComponent implements OnInit {

  @Input() visit;

  constructor() { }

  ngOnInit() {
  }

}
