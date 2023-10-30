import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOsgovtsComponent } from './edit-osgovts/edit-osgovts.component';
import { RenewOsgovtsComponent } from './renew-osgovts/renew-osgovts.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { OsgovtsComponent } from './osgovts.component';
import { CreateOsgovtsComponent } from './create-osgovts/create-osgovts.component';

const routes: Routes = [
  {
    path: '',
    component: OsgovtsComponent,
    canActivate: [AuthGuardService],
    children: [
        {
          path: 'create',
          component: CreateOsgovtsComponent,
          canActivate: [AuthGuardService]
        },
        {
          path: 'renew',
          component: RenewOsgovtsComponent,
          canActivate: [AuthGuardService]
        },
        {
          path: 'edit',
          component: EditOsgovtsComponent,
          canActivate: [AuthGuardService]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OsgovtsRoutingModule { }
