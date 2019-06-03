import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from "./app.routes";

// Services
import { AuthService } from "./services/auth.service";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';
import { PagesComponent } from './components/pages/pages.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { MobilemenuComponent } from './components/shared/mobilemenu/mobilemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PagesComponent,
    MobilemenuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
