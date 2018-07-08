import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  selectedDate: Date;
  selectedHour: string;

  constructor(private ngbModal: NgbModal, public activeModal: NgbActiveModal, private modalService: ModalService) {}

  ngOnInit() {
    this.selectedHour = this.modalService.selectedHour;
    this.selectedDate = this.modalService.selectedDate;
  }


}
