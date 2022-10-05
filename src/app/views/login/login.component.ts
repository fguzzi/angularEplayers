import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit(): void {
}

// NOSSAS VARIÁVEIS E MÉTODOS

  userModel = new User
 
  receberDados() {
    console.log(this.userModel)

    // DISPARANDO / SEND
    this.userService.logarUsuario(this.userModel).subscribe({
      next: (response) => {
        console.log("Deu certo") //SUCESSO
      }, 

      error: (err) => {
        console.log("Deu erro") //ERRO 
      },  
      

    })

  }
  }

