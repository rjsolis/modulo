import { Component, OnInit } from '@angular/core';

import { Automovil } from '../models';
import { NgbModal,  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent {

  accion: string;

  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) {
  }

}
