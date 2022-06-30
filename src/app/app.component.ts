import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.posts = firestore.collection('posts').snapshotChanges().pipe(tap(data => console.log(data)));

    this.itemsCollection = firestore.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();

  }

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
}
