// import {Component, OnInit} from '@angular/core';
// import {ViewEncapsulation} from '@angular/core';
// // import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// // import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// import {ModalService} from '../../services/modal.service';
// import moment from 'moment-es6';
// import {Visit} from '../../../core/models/visit.model';
// import {VisitService} from '../../../core/services/visit.service';
//
// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css'],
//   encapsulation: ViewEncapsulation.None,
// })
// export class ModalComponent implements OnInit {
//
//   selectedTimestamp: moment.Moment;
//   confirmation: boolean;
//
//
//   constructor(
//     // private ngbModal: NgbModal,
//     // public activeModal: NgbActiveModal,
//     private modalService: ModalService,
//     private visitService: VisitService) {
//   }
//
//   ngOnInit() {
//     this.selectedTimestamp = this.modalService.selectedTimestamp;
//     this.confirmation = this.modalService.confirmation;
//   }
//
//   confirmVisit(visitDate: moment.Moment): void {
//     console.log(visitDate.toDate())// poprawić!!
//     const visit = new Visit(undefined, visitDate.toDate(), '',  '', null);
//     this.visitService.createVisit(visit).subscribe(data => {
//       alert('your visit was successfully booked' + data);
//     }, error => console.error('error'));
//   }
//
//
// }
