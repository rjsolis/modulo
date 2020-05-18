import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal,  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  accion: string;

  auto: Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
