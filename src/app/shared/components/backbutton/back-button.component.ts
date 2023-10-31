import { Component } from '@angular/core';
import { BackButton } from '@twa-dev/types';

@Component({
  selector: 'BackButton',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  standalone: true,
})
export class BackButtonComponent  {
  BackButton: BackButton = window.Telegram.WebApp?.BackButton;

  goBack() {
    this.BackButton.onClick(() => window.history.back());
    this.BackButton.show();
  }
}