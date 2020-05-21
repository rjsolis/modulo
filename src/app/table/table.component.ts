import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Automovil } from '../models';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AUTOMOVILES} from  '../data'
import { ModalComponentComponent } from '../modal-component/modal-component.component';
import {ModalBorrarComponent} from '../modal-borrar/modal-borrar.component'
import { from } from 'rxjs';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';



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

  displayProgressBar: Boolean;

  ngOnInit() {
    this.displayProgressBar = true;
    this.autoService.getAutos().subscribe((response)=>{
      this.displayProgressBar = false;
      this.autos = response.data;
    })
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAgregarComponent, {centered: true});
    modalRef.componentInstance.action = 'Agregar';
    modalRef.result.then(
      (auto) => {
        this.autoService.addAutos(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  openModalEditar(auto: Automovil){
     const modalRef = this.modalService.open(ModalComponentComponent, {centered: true});
     modalRef.componentInstance.auto = auto;
     modalRef.componentInstance.accion = 'Editar';

     modalRef.result.then(
        (auto) => {
          this.autoService.updateAutos(auto).subscribe(
            response => console.log(response));

        },
        (reason) => {

          console.log(reason)
        }

     )

  }




  openModalBorrar(auto: Automovil){
    const modalRef = this.modalService.open(ModalBorrarComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    
    modalRef.result.then(
        (autoTemp) => {
                this.autoService.deleteAuto(autoTemp).subscribe(response => {
              console.log("Respuesta cuando se termina de eliminar un auto")
              console.log(response)

                })

              },
              (reason) => {console.log(reason)


        }



    )

    modalRef.componentInstance.accion = 'Borrar';


 }

  

}
