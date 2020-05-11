import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {AUTOMOVILES} from  '../data'
import { from } from 'rxjs';

import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {
autos: Automovil[];
autoSeleccionado: Automovil;
  constructor(private modalService: NgbModal) { }

  

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }
onSelect(auto:Automovil, content): void {

  this.autoSeleccionado = auto;
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
}
}


