import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Observable, tap } from 'rxjs';

export interface Item { name: string; }
export interface Post {
  author: string,
  content: string,
  title: string

}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Observable<any[]>;
  constructor(private afs: AngularFirestore){
    this.posts = afs.collection('posts').snapshotChanges().pipe(tap(data => console.log(data)));

    // Step 1: conectar la coleccion en firebase a una variable
    this.PostManu = afs.doc<Post>('posts/quKWCoIlLrlEfS1D88G5')
    this.itemsCollection = afs.collection<Item>('items');

    // Step 2: la parte observable
    this.PostManuObs = this.PostManu.valueChanges()
    this.itemsObs = this.itemsCollection.valueChanges();

  }
  itemsCollection: AngularFirestoreCollection<Post>;
  itemsObs: Observable<Item[]>;

  PostManu: AngularFirestoreDocument<Item>
  PostManuObs: Observable<Post[]>

  ngOnInit(): void {






  const doc = this.afs.doc('books/bookID');

  const data = {
    author: 'Jeff Delaney',
    title: 'The Angular Firebase Survival Guide',
    year: 2017
   };

   doc.set(data); // reset all properties with new data
   doc.update({ publisher: 'LeanPub' }); // update individual properties
   doc.delete(); // update individual properties


  }

}
