import { HttpClient, HttpHeaders } from '@angular/common/http'; // IMPORT DO HttpClient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // REQUISIÇÕES ASSÍNCRONAS
import { User } from '../models/user'; // IMPORT DO MODEL User

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(    
    // INJEÇÃO DE DEPENDÊNCIA DO MÓDULO HttpClient
    private httpClient: HttpClient
  ) { }

  urlLogin = "http://localhost:3000/signin"

  // POST DE LOGIN - ANALOGIA COM INSOMNIA

  // User CONTEM DADOS QUE VEM DO login.component
  logarUsuario(usuario: User): Observable<any> {

     return this.httpClient.post(this.urlLogin, JSON.stringify(usuario), {
      headers: new HttpHeaders({"Content-type": "application/json"}),
      observe: "response"  // RESPONSE: PARA RECEBER DADOS TODOS DE UMA SÓ VEZ
     })
  }
}
