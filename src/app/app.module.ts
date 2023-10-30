import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsgovtsComponent } from './components/osgovts/osgovts.component';
import { CreateOsgovtsComponent } from './components/osgovts/create-osgovts/create-osgovts.component';
import { RenewOsgovtsComponent } from './components/osgovts/renew-osgovts/renew-osgovts.component';
import { EditOsgovtsComponent } from './components/osgovts/edit-osgovts/edit-osgovts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OsgovtsComponent,
    CreateOsgovtsComponent,
    RenewOsgovtsComponent,
    EditOsgovtsComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
