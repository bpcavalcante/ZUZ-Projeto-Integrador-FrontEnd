import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  userFoto = localStorage.getItem("foto")
  userNome = localStorage.getItem("nome")

  constructor() { }

  ngOnInit(): void {
  }

}
