import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOsgovtsComponent } from './components/osgovts/create-osgovts/create-osgovts.component';
import { EditOsgovtsComponent } from './components/osgovts/edit-osgovts/edit-osgovts.component';
import { RenewOsgovtsComponent } from './components/osgovts/renew-osgovts/renew-osgovts.component';

const routes: Routes = [
  {
    path: 'osgovts',
    component: CreateOsgovtsComponent,
    children: [
      {
        path: 'create',
        component: CreateOsgovtsComponent,
      },
      {
        path: 'renew',
        component: RenewOsgovtsComponent,
      },
      {
        path: 'edit',
        component: EditOsgovtsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
