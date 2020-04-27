import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {AUTOMOVILES} from  '../data'
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
autos: Automovil[];
  constructor() { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

}
