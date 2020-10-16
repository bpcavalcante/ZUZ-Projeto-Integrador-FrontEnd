import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  nomeTema: string


  idTema: number;

  idPost: number;
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    /*this.idPost = this.route.snapshot.params['id']
    if (this.idPost != undefined){
      this.findByIdPostagem(this.idPost)
    }*/
    this.nomeTema = this.route.snapshot.params['nome']
      this.findByNomeTema(this.nomeTema)
    

  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.descricao == null || this.postagem.descricao == null || this.postagem.tema == null) {
      alert('Preencha todos os campos antes de publicar !')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        alert('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp      
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }


  salvar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.router.navigate(['/feed'])
      alert('Postagem alterada com sucesso')
    }, err => {
      if (err.status == '500') {
        alert('Preencha todos os campos corretamente antes de enviar !')
      }
    })
  }

  btnSim() {
    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      this.router.navigate(['/feed'])
      alert('Postagem apagada com sucesso !')
    })
  }

  btnNao() {
    this.router.navigate(['/feed'])
  }

  findByNomeTema(nomeTema: string){
    if(nomeTema === ''){
    this.findAllTemas()
    console.log("estou aqui no if")
  } else{
    this.temaService.getByNomeTema(nomeTema).subscribe((resp: Tema[]) => {
      this.listaTemas = resp
      console.log("estou aqui no else " + this.listaTemas)
    })
  }
  }

}
