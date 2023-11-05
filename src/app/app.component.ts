import {Component, Renderer2, OnInit, signal} from '@angular/core';
import { NgIf} from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  
  backButton: BackButton = window.Telegram.WebApp?.BackButton;
  isDark = window.Telegram.WebApp?.colorScheme == 'light' ? false : true;
  isTG = window.Telegram.WebApp != null;
  ///isDark = false;
  
  constructor(private renderer: Renderer2)
  { 
    this.isDark == true? this.renderer.addClass(document.body, 'dark') :  this.renderer.removeClass(document.body, 'dark');
    if(this.isTG)
    {
      this.renderer.removeClass(document.body, 'bg-white');
      this.renderer.removeClass(document.body, 'bg-white');
    }
    else
    {
      this.isDark == true? this.renderer.addClass(document.body, 'bg-black') : this.renderer.addClass(document.body, 'bg-white');
    }
  }

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
