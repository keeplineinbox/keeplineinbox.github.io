import { Component, inject, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EMPTY, catchError, finalize } from 'rxjs';
import { ApiService } from './services/api.service';
import { NewsService } from './services/news.service';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [CommonModule, RouterOutlet],
})

export class AppComponent {
  title = 'Insurance.Agent.Client';

  constructor(private newsService: NewsService) {}

  userName = signal(window.Telegram.WebApp?.initDataUnsafe?.user?.first_name);
  isAuthenticated = signal(!!window.Telegram.WebApp?.initDataUnsafe?.user);
  apiService = inject(ApiService);
  isLoading = signal(false);
  error = signal('');
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
}
