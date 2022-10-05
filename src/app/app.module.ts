// CARREGAMENTO DOS MÓDULOS NATIVOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { HttpClientModule } from'@angular/common/http'; //   EQUIVALENTE A ABRIR O INSOMNIA
import { AppRoutingModule } from './app-routing.module';

// CARREGAMENTO DOS MÓDULOS DO PROJETO
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // IMPORTAÇÃO 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
