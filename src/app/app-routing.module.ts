import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './account/components/account-create/account-create.component';
import { AccountDeleteComponent } from './account/components/account-delete/account-delete.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountUpdateComponent } from './account/components/account-update/account-update.component';
import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {path: 'account/create', component: AccountCreateComponent, canActivate: [AuthGuard]},
  {path: 'account/list', component: AccountListComponent, canActivate: [AuthGuard]},
  {path: 'account/update', component: AccountUpdateComponent, canActivate: [AuthGuard]},
  {path: 'account/delete', component: AccountDeleteComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
