import {Component, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SkeletonModule} from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [
    CardModule,
    SharedModule,
    RouterLink,
    TooltipModule,
    ButtonModule,
    NgIf,
  ],
})
export class ProductsComponent {
  isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  BackButton: BackButton = window.Telegram.WebApp?.BackButton;
  ngOnInit(): void {
    this.BackButton.hide();
  }
}
