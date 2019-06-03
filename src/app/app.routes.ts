import { Routes, RouterModule } from '@angular/router';

import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PagesComponent, loadChildren: './modules/pages.module#PagesModule'},
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);