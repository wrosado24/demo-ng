import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './account/components/account-create/account-create.component';
import { AccountDeleteComponent } from './account/components/account-delete/account-delete.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountUpdateComponent } from './account/components/account-update/account-update.component';

const routes: Routes = [
  {path: 'account/create', component: AccountCreateComponent},
  {path: 'account/list', component: AccountListComponent},
  {path: 'account/update', component: AccountUpdateComponent},
  {path: 'account/delete', component: AccountDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
