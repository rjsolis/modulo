import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';

const routes: Routes =[
{
path: 'list',
component: ListComponent

},
{
  path: 'table',
  component: TableComponent
  
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
