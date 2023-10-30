import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOsgovtsComponent } from './components/osgovts/create-osgovts/create-osgovts.component';
import { EditOsgovtsComponent } from './components/osgovts/edit-osgovts/edit-osgovts.component';
import { RenewOsgovtsComponent } from './components/osgovts/renew-osgovts/renew-osgovts.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'osgovts',
    loadChildren: () => import('./components/osgovts/osgovts-routing.module').then((m) => m.OsgovtsRoutingModule),
    canActivate: [AuthGuardService],
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
