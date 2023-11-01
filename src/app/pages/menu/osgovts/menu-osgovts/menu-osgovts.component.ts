import {Component} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-menu-osgovts',
  templateUrl: './menu-osgovts.component.html',
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
export class MenuOsgovtsComponent {
  BackButton: BackButton = window.Telegram.WebApp?.BackButton;
  
  constructor(private router: Router)
  { }

  ngOnInit(): void {
    this.BackButton.show();
    this.BackButton.onClick(() => {
      window.history.back();
    });
  }
}