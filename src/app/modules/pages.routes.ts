import { PresupuestosComponent } from './../components/presupuestos/presupuestos.component';
import { HomeComponent } from './../components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PAGES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'presupuestos', component: PresupuestosComponent }
];
  
export const routes = RouterModule.forChild(PAGES_ROUTES);