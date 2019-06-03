import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

import { UsuarioModel } from "../models/usuario.model";
import { MenuUsuarioModel } from "../models/menuUsuario.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login( usuario: UsuarioModel ){
    return "Logueado";
   }

  logout(){  }

  registrar() {  }

  getMenuUsuario(idUsuario: number): Observable<MenuUsuarioModel[]>{
    return this.http.get<MenuUsuarioModel[]>(this.url + "menuUsuario/?idUsuario=" + idUsuario);
  }
}
