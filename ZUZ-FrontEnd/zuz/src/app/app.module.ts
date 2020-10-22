
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';
import { SobreComponent } from './sobre/sobre.component';
import { CarteiraVacinaComponent } from './carteira-vacina/carteira-vacina.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { BarraDireitaComponent } from './barra-direita/barra-direita.component';

import { ConsultasComponent } from './consultas/consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CarteiraVacinaComponent,
    NavbarComponent,
    HomeComponent,
    PerfilLateralComponent,
    FooterComponent,
    FeedComponent,
    SobreComponent,
    LoginComponent,
    CadastroComponent,
    PostTemaComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    DeletePostagemComponent,
    BarraDireitaComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
