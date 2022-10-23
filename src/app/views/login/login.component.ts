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

    const blackList = ["SELECT", "OR", ' ""="" ', "-- ", ";", "1 = 1", "1=1", "DROP", "\"\"=\"\"", "'='"]; // LISTA DE PALAVRAS CHAVE
    let ataque = 0;


    blackList.forEach( (palavra) => {
        if(this.userModel.email?.toUpperCase().includes(palavra)) {  // SE FOR ENCONTRADO SQL INJECTION 
          ataque++;
        }
    } );

      if (this.userModel.email == "" || this.userModel.password == "" || ataque > 0) { // COM CAMPOS VAZIOS OU SOB ATAQUE
        this.mensagem = "Preencher os campos corretamente";
      } else {   // PODE FAZER LOGIN NORMALMENTE


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
  
}
