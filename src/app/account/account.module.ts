import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountListComponent } from './components/account-list/account-list.component';

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  providers: []
})
export class AccountModule { }
