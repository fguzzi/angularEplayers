import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
}

// NOSSAS VARIÁVEIS E MÉTODOS

  userModel = new User
 
  receberDados() {
    console.log(this.userModel)

  }
  }

