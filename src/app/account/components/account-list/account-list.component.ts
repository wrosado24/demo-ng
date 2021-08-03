import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../model/account.model';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService, private router: Router) {
    this.accounts = [];
   }

  async ngOnInit() {
    const response = await this.accountService.listAccounts();
    if(response != null){
      this.accounts = response;
    }
  }

  editAccount(account: Account){
    localStorage.setItem("id", account.id.toString());
    this.router.navigate(['account/create']);
  }

}
