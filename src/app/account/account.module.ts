import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: []
})
export class AccountModule { }
