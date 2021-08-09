import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    SharedModule,
    ButtonModule,
    AuthModule.forRoot({
      domain: 'wrosado24.us.auth0.com',
      clientId: 'qy50IuO83CljXzJpoOzn8Tnsers9jj3a',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
