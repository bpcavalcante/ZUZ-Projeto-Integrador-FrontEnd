import { Component, OnInit } from '@angular/core';
import{ faGithub } from '@fortawesome/free-brands-svg-icons'
import{ faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { $ } from 'protractor';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  
  faLinkedin = faLinkedin

  faGithub = faGithub

  constructor() { 
    
  }

  ngOnInit(){
    

    
  }

  

}
