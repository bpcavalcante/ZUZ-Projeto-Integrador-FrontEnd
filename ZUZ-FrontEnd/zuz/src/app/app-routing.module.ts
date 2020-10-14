import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'feed/:id', component: FeedComponent},
  { path: 'sobre' , component: SobreComponent},
  { path: 'posttema', component: PostTemaComponent},
  { path: 'put-postagem', component: PutPostagemComponent},
  { path: 'put-tema/:id' , component: PutTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
