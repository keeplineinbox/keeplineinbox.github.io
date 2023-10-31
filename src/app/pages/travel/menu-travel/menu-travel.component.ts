import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-menu-travel',
  templateUrl: './menu-travel.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    RouterLink,
    CardModule,
    SharedModule,
  ],
})
export class MenuTravelComponent {
  constructor() { }
}