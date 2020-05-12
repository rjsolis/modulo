import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    TableComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
