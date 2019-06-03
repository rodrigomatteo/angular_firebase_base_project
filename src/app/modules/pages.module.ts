import { NgModule } from '@angular/core';
import { routes } from './pages.routes';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { PagesComponent } from './../components/pages/pages.component';
import { PresupuestosComponent } from './../components/presupuestos/presupuestos.component';

@NgModule({
  imports: [routes],
  declarations: [
    HomeComponent,
    PresupuestosComponent
  ]
})

export class PagesModule { }
