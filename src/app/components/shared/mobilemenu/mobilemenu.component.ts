import { MenuUsuarioModel } from './../../../models/menuUsuario.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html'
})
export class MobilemenuComponent implements OnInit {
  menuUsuario: MenuUsuarioModel[];

  constructor(private menuService : AuthService) { }

  ngOnInit() {
    this.menuService.getMenuUsuario(1)
    .subscribe(
        data => {
          this.menuUsuario = data;
        }
    )
  }

}
