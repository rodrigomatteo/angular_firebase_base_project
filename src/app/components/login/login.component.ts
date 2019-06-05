import { UsuarioModel } from '../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Login(form: NgForm) {
    if(form.invalid) return;

    this.authService.login(this.usuario)
    .pipe(first())
    .subscribe(
        data => {
          console.log(data);
          this.router.navigate([this.returnUrl]);
        },
        err => {
            console.log(err);
        });
//console.log(this.authService.login(this.usuario));
  }
}
