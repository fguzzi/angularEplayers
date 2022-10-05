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

  constructor( private userService: UserService) { } // CARREGAR userServer NO CONSTRUCTOR DA CLASSE

  ngOnInit(): void { }

// NOSSAS VARIÁVEIS E MÉTODOS

  userModel = new User
  mensagem = ""
 
  receberDados() {
    console.log(this.userModel)

    // DISPARANDO A FUNÇÃO / SEND
    this.userService.logarUsuario(this.userModel).subscribe({ //SUBSCRIBE É FUNÇÃO QUE É CHAMADA P/ RECEBER DADOS
      next: (response) => {

        console.log("Solicitação OK"); //SUCESSO
        console.log(response);
        this.mensagem = "Logado com sucesso";
      }, 

      error: (err) => {

        console.log("Ocorreu um erro"); //ERRO 
        console.log(err);
        this.mensagem = err.error;
      },
      })
      
    }

  }
  

