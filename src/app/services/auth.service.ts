import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { UsuarioModel } from "../models/usuario.model";
import { MenuUsuarioModel } from "../models/menuUsuario.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UsuarioModel>;

  private url = environment.apiUrl;
  private authUrl = environment.authUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login( usuario: UsuarioModel ): Observable<UsuarioModel>{
    var authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post<UsuarioModel>(
      `${this.authUrl}/verifyPassword?key=${ this.apiKey } `,
      authData)
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.idToken) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
          }

          return user;
      }));
    /*
    return this.http.post(
      `${this.authUrl}/verifyPassword?key=${ this.apiKey } `,
      authData
    );
    */
   }

  logout(){
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
  }

  registrar() {  }

  isAuthenticated(): boolean {
    const currentUser = this.currentUserSubject.value;
    return currentUser != null;
  }

  getMenuUsuario(idUsuario: number): Observable<MenuUsuarioModel[]>{
    return this.http.get<MenuUsuarioModel[]>(this.url + "menuUsuario/?idUsuario=" + idUsuario);
  }
}
