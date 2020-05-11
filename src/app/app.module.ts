import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
