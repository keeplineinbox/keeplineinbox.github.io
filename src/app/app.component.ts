import {Component, OnInit, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {BreadcrumbComponent} from './layout/index';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    BreadcrumbComponent,
    RouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  
  backButton: BackButton = window.Telegram.WebApp?.BackButton;

  constructor(private router: Router)
  { }

  ngOnInit(): void {
    this.backButton.show();
    this.backButton.onClick(() => window.history.back());
  }
}
  //userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  //isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  //apiService = inject(ApiService);
  //isLoading = signal(false);
  //error = signal('');
  // counter$ = this.apiService.countUsers();

  // onSubmit() {
  //   this.isLoading.set(true);
  //   this.error.set('');
  //   this.apiService.submit().pipe(
  //     catchError((e) => {
  //       if(e.message) {
  //         this.error.set(e.error?.message);
  //       }
  //       return EMPTY;
  //     }),
  //     finalize(() => {
  //       this.isLoading.set(false);
  //     })
  //   ).subscribe();
  // }
//}
