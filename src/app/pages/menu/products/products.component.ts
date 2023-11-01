import {Component, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    SpinnerComponent,
  ],
})
export class ProductsComponent {
  isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  isLoading = signal(false);
}
