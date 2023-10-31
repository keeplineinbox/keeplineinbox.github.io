import {Routes} from '@angular/router';
import {AuthGuardService} from '../../services/auth-guard.service';
import {MenuTravelComponent} from './menu-travel/menu-travel.component';


export const TRAVEL_ROUTES: Routes = [
  {
    path: '',
    component: MenuTravelComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: '',
    },
  },
];