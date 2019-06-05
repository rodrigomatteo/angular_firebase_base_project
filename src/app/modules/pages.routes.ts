import { PresupuestosComponent } from './../components/presupuestos/presupuestos.component';
import { HomeComponent } from './../components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../guards/auth.guard';

const PAGES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [AuthGuard] }
];

export const routes = RouterModule.forChild(PAGES_ROUTES);
