import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Automovil } from './models';
import { Observable, of, from } from 'rxjs';
import { MessagesService } from './messages.service';
import {catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = "https://catalogo-autos.herokuapp.com/api/autos/limit/100";
  private autosActionsURL = "https://catalogo-autos.herokuapp.com/api/autos";
  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getAutos(): Observable<any> {

    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(() => this.messagesService.add('Productos Obtenidos'))
    )

  }


  updateAutos(auto: Automovil): Observable<any> {
    console.log(auto)
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto).pipe(

      catchError(this.handleError<any>('updateAutos')),
      tap((result) => {
        console.log(result);
        this.messagesService.add(`Auto editado con ID = ${result.data._id}`);
      })
    )
     
  }


  addAutos(auto: Automovil): Observable<any> {
    console.log(auto)
    return this.http.post(this.autosActionsURL, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) => {
        console.log(result);
        this.messagesService.add(`Auto creado con ID = ${result.data._id}`);
      })
    )
  }

  deleteAuto(auto: Automovil): Observable<any> {
    console.log(auto)
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAuto')),
      tap(() => {
        console.log(auto);
        this.messagesService.add(`Auto eliminado con ID = ${auto._id}`);
      })
    )
  }

  private handleError<T>(operation = 'operacion', result?: T) {
    return(error: any): Observable<T> => {
      this.messagesService.add(`${operation} fallo: ${error.message}`)
      return of(result as T)


    }
  }

}
