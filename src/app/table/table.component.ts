import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Automovil } from '../models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data'
import { ModalComponentComponent } from '../modal-component/modal-component.component';
import { ModalBorrarComponent } from '../modal-borrar/modal-borrar.component'
import { from } from 'rxjs';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page = 1;
  pageSize = 10;
  autos: Automovil[];
  autoSeleccionado: Automovil;
  searchText;
  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  displayProgressBar: Boolean;

  ngOnInit() {
    this.page =+sessionStorage.getItem('currentPage')
    this.displayProgressBar = true;
    this.autoService.getAutos().subscribe((response) => {
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1500)
    })
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAgregarComponent, { centered: true });
    modalRef.componentInstance.action = 'Agregar';
    modalRef.result.then(
      (auto) => {
        this.autoService.addAutos(auto).subscribe(response => 
          {
            sessionStorage.setItem('currentPage', this.page.toString())
            this.ngOnInit();
          console.log(response);
          })
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalComponentComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(
          response => {
            sessionStorage.setItem('currentPage', this.page.toString())
            this.ngOnInit();
          console.log(response);
        })
      },
      (reason) => {

        console.log(reason)
      }

    )

  }




  openModalBorrar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalBorrarComponent, { centered: true });
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString())
          this.ngOnInit();
          console.log("Respuesta cuando se termina de eliminar un auto")
          console.log(response)

        })

      },
      (reason) => {
        console.log(reason)


      }



    )

    modalRef.componentInstance.accion = 'Borrar';


  }



}
