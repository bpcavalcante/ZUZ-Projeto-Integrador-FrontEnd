import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';


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
    private temaService: TemaService,
    private router: Router
    


  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllTemas()
  }

   
  findByNomeTema(){
      if(this.nomeTema === ''){
      this.findAllTemas()
    } else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })

  }
  buscaPorTema(){
    this.router.navigate(['/feed',this.nomeTema])
  }


}