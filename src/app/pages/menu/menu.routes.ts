import {Routes} from '@angular/router';
import {AuthGuardService} from '../../services/auth-guard.service';
import {MenuComponent} from './menu.component';


export const MENU_ROUTES: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Menu',
    },
  },
];