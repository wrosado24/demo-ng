import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountDeleteComponent } from './account/account-delete/account-delete.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountUpdateComponent } from './account/account-update/account-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDeleteComponent,
    AccountCreateComponent,
    AccountUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
