import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Automovil } from '../models';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AUTOMOVILES} from  '../data'




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page = 1;
  autos: Automovil[];
autoSeleccionado: Automovil;
  constructor(private modalService: NgbModal, private autoService: AutosService) { }


  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  

}
