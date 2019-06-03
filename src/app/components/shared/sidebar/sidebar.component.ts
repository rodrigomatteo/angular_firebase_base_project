import { MenuUsuarioModel } from './../../../models/menuUsuario.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuUsuario: MenuUsuarioModel[];
  
  constructor(private menuService : AuthService) { }
  

  ngOnInit() {
    this.menuService.getMenuUsuario(1)
    .subscribe(
        data => {
          this.menuUsuario = data;
          console.log(this.menuUsuario);
        }
    )
  }

}
