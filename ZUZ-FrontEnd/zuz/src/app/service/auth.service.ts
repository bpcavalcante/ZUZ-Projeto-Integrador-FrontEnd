import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient

  ) { }

  logar(usuarioLogin: UsuarioLogin){
    return this.http.post('http://localhost:8080/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  navbar(){
    let ok = false
    let token = localStorage.getItem('token')
    if (token != null){
      ok = true
    }
    return ok
  }



}


