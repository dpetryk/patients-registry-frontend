import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from '../../services/modal.service';
import moment from 'moment-es6';
import {Patient} from '../../models/patient.model';
import {Visit} from '../../models/visit.model';
import {VisitService} from '../../services/visit.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  selectedTimestamp: moment.Moment;

  constructor(private ngbModal: NgbModal, public activeModal: NgbActiveModal, private modalService: ModalService, private visitService: VisitService) {
  }

  ngOnInit() {
    this.selectedTimestamp = this.modalService.selectedTimestamp;
  }

  confirmVisit(visitDate: moment.Moment): void { // poprawić!!
    const patient: Patient = new Patient(1, 'Test', 'Testowy', '22222222222', undefined);
    const visit = new Visit(1, visitDate.toDate(), undefined, patient);
    this.visitService.createVisit(visit);
  }


}
