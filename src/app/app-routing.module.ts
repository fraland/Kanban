import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ListatareasComponent } from './listatareas/listatareas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path: 'home',  component: HomeComponent},
  {  path: 'post',  component: PostsComponent},
  {  path: 'listatareas',  component: ListatareasComponent},
  {  path: ' ',  redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
