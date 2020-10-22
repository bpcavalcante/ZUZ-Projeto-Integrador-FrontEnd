import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public titulo: string
  public listaPostagens: Postagem[]


  tema: Tema = new Tema()
  listaTemas: Tema[]
  nomeTema: string

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(){
  }

  sair(){
    localStorage.clear()
    this.router.navigate(['/home'])
  }




}
