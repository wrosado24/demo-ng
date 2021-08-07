import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AccountModule,
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
