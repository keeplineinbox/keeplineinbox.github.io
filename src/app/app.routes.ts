import {Routes} from '@angular/router';
import {Error404Component} from './pages/error404';
import {UnauthorizedComponent} from './pages/unauthorized';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'menu',
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu').then((m) => m.MENU_ROUTES),
  },
  {
    path: 'osgovts',
    loadChildren: () => import('./pages/osgovts').then((m) => m.OSGOVTS_ROUTES),
    data: {
      breadcrumb: 'Osgovts',
    },
  },
  {
    path: 'travel',
    loadChildren: () => import('./pages/travel').then((m) => m.TRAVEL_ROUTES),
    data: {
      breadcrumb: 'Travel',
    },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];