import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';
import { TareaservicioService } from '../services/tareaservicio.service';

export interface Item { name: string; }

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.scss']
})
export class ListatareasComponent{
    constructor(
      public tareaS: TareaservicioService) {

    }
}
