import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.scss']
})
export class ListatareasComponent{
    constructor(firestore: AngularFirestore){

    }

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
        console.log(this.tarea)
        this.placeholder = this.tarea.splice(index, index)
        console.log('placeholder' + this.placeholder)
        this.InProcess = this.InProcess.concat(this.placeholder)
        console.log(this.InProcess)


      } else if (columna == 2){

         this.tareacomp = this.tareacomp.concat(this.InProcess.splice(index, index))
         console.log(this.tareacomp)
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
