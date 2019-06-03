import { UsuarioModel } from '../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = "rodrigo.matteo@gmail.com";
  }

  Login(form: NgForm) {
    if(form.invalid) return;

    console.log(this.authService.login(this.usuario));
  }
}
