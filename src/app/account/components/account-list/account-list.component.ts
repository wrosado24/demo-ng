import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SortEvent } from 'primeng/api';
import { Account } from '../../model/account.model';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers:[MessageService]
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  first = 0;
  rows = 10;

  constructor(private accountService: AccountService, private router: Router) {
    this.accounts = [];
  }

  async ngOnInit() {
    const response = await this.accountService.listAccounts();
    if (response != null) {
      this.accounts = response;
    }
  }

  editAccount(account: Account) {
    localStorage.setItem("json", JSON.stringify(account));
    this.router.navigate(['account/update']);
  }

  deleteAccount(account: Account) {
    localStorage.setItem("json", JSON.stringify(account));
    this.router.navigate(['account/delete']);
  }

  redirectCreate() {
    this.router.navigate(['account/create']);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.accounts ? this.first === (this.accounts.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.accounts ? this.first === 0 : true;
  }

}
