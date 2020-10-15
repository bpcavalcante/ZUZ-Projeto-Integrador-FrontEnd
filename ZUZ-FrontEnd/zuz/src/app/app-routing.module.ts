import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarteiraVacinaComponent } from './carteira-vacina/carteira-vacina.component';

import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

import { PostTemaComponent } from './post-tema/post-tema.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'sobre' , component: SobreComponent},
  { path: 'cadastro-tema', component: CadastroComponent},
  { path: 'carteira-vacina', component: CarteiraVacinaComponent},
  { path: 'posttema', component: PostTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
