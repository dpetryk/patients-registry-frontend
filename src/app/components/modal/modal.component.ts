import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {

  title;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  summarizeReservation(){}

}
