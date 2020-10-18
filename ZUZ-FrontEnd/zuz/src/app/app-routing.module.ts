import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarteiraVacinaComponent } from './carteira-vacina/carteira-vacina.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { SobreComponent } from './sobre/sobre.component';
import { ConsultasComponent } from './consultas/consultas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'feed/:id', component: FeedComponent},
  { path: 'sobre' , component: SobreComponent},
  { path: 'posttema', component: PostTemaComponent},
  { path: 'delete-postagem', component: DeletePostagemComponent},
  { path: 'put-tema/:id' , component: PutTemaComponent},
  { path: 'delete-tema/:id' , component: DeleteTemaComponent},
  { path: 'cadastro-tema', component: CadastroComponent},
  { path: 'carteira-vacina', component: CarteiraVacinaComponent},
  {path: 'consultas', component: ConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
