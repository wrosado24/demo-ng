import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountService } from './service/account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    HttpClientModule
  ],
  providers: []
})
export class AccountModule { }
