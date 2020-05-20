import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { FormsModule } from '@angular/forms';
import { ModalBorrarComponent } from './modal-borrar/modal-borrar.component';
import { ModalAgregarComponent } from './modal-agregar/modal-agregar.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    TableComponent,
    DefaultpageComponent,
    ModalComponentComponent,
    ModalBorrarComponent,
    ModalAgregarComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponentComponent]
  
})
export class AppModule { }
