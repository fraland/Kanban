import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareaservicioService {

  constructor() { }

  tareacomp:string[] = ['']
  tarea:string[] = ['']
  InProcess:string[] = ['']
  numero: string = ''
  placeholder: string[] = []
  tareascomp:string[] = ['nacer']


  otronumero() {
    this.tarea.push(this.numero)
    this.numero = ''
  }


  completada(index: number, columna: number ){
    if (columna == 1){
      this.placeholder = this.tarea.splice(index, index)
      this.InProcess = this.InProcess.concat(this.placeholder)
    } else if (columna == 2){
       this.tareacomp = this.tareacomp.concat(this.InProcess.splice(index, index))
    }
  }
  borrarcomp(index: number, columna: number){
    if (columna == 1){
      this.tarea.splice(index, 1)
    } else if (columna == 2){
      this.InProcess.splice(index, 1)
    } else if (columna == 3){
      this.tareacomp.splice(index, 1)
    }
  }
}
