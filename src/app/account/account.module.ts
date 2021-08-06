import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { AccountDeleteComponent } from './components/account-delete/account-delete.component';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountListComponent,
    AccountUpdateComponent,
    AccountDeleteComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: []
})
export class AccountModule { }
