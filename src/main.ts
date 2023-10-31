import {enableProdMode, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {withInterceptorsFromDi, provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {AuthGuardService} from './app/services/auth-guard.service';
import {APP_ROUTES} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(
        BrowserModule,
        AuthGuardService,
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));