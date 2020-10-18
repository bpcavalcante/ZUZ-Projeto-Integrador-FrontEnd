import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User()
  senha: string;

  usuarioLogin: UsuarioLogin = new UsuarioLogin()



  constructor(
    private authService: AuthService,
    private router:Router) { }

  ngOnInit() {
    localStorage.clear()
  }

  conferirSenha(event: any){
    this.senha= event.target.value;
  }

  cadastrar(){
    if (this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(["/home"])
        alert("Usuário cadastrado com sucesso !")

      })}
    else{
      alert('Senhas não conferem!')
    }

  }

  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=> {
      this.usuarioLogin = resp
      environment.token = this.usuarioLogin.token
      environment.token = this.usuarioLogin.token
      environment.token = this.usuarioLogin.foto
      environment.token = this.usuarioLogin.nome
      this.router.navigate(['/feed'])
    });

  }


}
