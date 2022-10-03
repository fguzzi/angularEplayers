import { HttpClient } from '@angular/common/http'; // IMPORT DO HttpClient
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

  // POST DE LOGIN - INSOMNIA

  logarUsuario(usuario: User): Observable<any{

     return this.httpClient.post(this.urlLogin, body, objConfiguracao)
  }
}
