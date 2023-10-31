import {Component, signal, OnInit, ViewEncapsulation} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SkeletonModule} from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';

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
  userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
}
