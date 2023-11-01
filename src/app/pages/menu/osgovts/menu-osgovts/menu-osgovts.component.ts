import {Component} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-menu-osgovts',
  templateUrl: './menu-osgovts.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
})
export class MenuOsgovtsComponent {
  constructor()
  { }

}