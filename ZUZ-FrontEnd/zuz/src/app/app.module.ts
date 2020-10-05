import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> f281a11e544d34002224f0491dfd92367d66f046

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    HomeComponent
>>>>>>> f281a11e544d34002224f0491dfd92367d66f046
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
